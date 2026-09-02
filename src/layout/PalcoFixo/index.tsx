import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FraseRotativa from "../../components/FraseRotativa";
import SeletorLingua from "../../components/SeletorLingua";
import { useSessaoAtiva } from "../../contexts/sessaoAtiva";
import { frasesDoHero } from "../../data/frases";
import { redesSociais } from "../../data/redes";
import { defaultTheme } from "../../styles/theme";
import {
  ESCALA_NOME_ANCORADO,
  ESCALA_SOCIAIS_ANCORADO,
  VAO_SOCIAIS_ANCORADO,
} from "./metricas";
import * as S from "./styles";

gsap.registerPlugin(ScrollTrigger);

/** O hero é quem dita a faixa de rolagem em que a ancoragem acontece. */
const SELETOR_HERO = "[data-hero]";
/** A barra de navegação só existe a partir da segunda seção. */
const SELETOR_NAV = "[data-nav]";

/*
 * Fatia da faixa de rolagem do hero em que a coluna sobe. O que sobra depois
 * dela é a entrada do cabeçalho de sessão e da navegação.
 */
const DURACAO_SUBIDA = 0.75;
const CURVA_SUBIDA = "power2.inOut";

/**
 * Delta que leva `referencia` para cima de `alvo`, contando com a escala que
 * `movel` vai ter no fim da viagem.
 *
 * `referencia` pode ser o próprio `movel` (caso do nome) ou um filho dele
 * (caso das redes, onde o alvo do Figma é o primeiro ícone e não a caixa, que
 * tem recuo à esquerda). O transform já aplicado é descontado da medida, senão
 * ele entraria na conta duas vezes a cada refresh.
 */
function medirAncoragem(
  movel: HTMLElement,
  referencia: HTMLElement,
  alvo: HTMLElement,
  escala: number,
) {
  const xAplicado = (gsap.getProperty(movel, "x") as number) || 0;
  const yAplicado = (gsap.getProperty(movel, "y") as number) || 0;
  const escalaAplicada = (gsap.getProperty(movel, "scale") as number) || 1;

  const caixaMovel = movel.getBoundingClientRect();
  const caixaRef = referencia.getBoundingClientRect();
  const caixaAlvo = alvo.getBoundingClientRect();

  /*
   * Desconta o que já está aplicado em vez de zerar o transform e medir de
   * novo: com a origem no canto superior esquerdo, a esquerda da caixa do
   * movel é a natural mais a translação, e o deslocamento do filho dentro dela
   * aparece multiplicado pela escala corrente. Duas divisões resolvem, sem
   * escrever no DOM no meio da inicialização do tween.
   */
  const naturalMovelX = caixaMovel.left - xAplicado;
  const naturalMovelY = caixaMovel.top - yAplicado;
  const recuoRefX = (caixaRef.left - caixaMovel.left) / escalaAplicada;
  const recuoRefY = (caixaRef.top - caixaMovel.top) / escalaAplicada;

  return {
    x: caixaAlvo.left - (naturalMovelX + recuoRefX * escala),
    y: caixaAlvo.top - (naturalMovelY + recuoRefY * escala),
  };
}

const PalcoFixo = () => {
  const { sessao, subsessao } = useSessaoAtiva();

  const raizRef = useRef<HTMLDivElement>(null);
  const nomeRef = useRef<HTMLHeadingElement>(null);
  const sociaisRef = useRef<HTMLElement>(null);
  const vagaNomeRef = useRef<HTMLSpanElement>(null);
  const vagaSociaisRef = useRef<HTMLSpanElement>(null);
  const poseSessaoRef = useRef<HTMLDivElement>(null);
  const tituloRef = useRef<HTMLSpanElement>(null);
  const subtituloRef = useRef<HTMLSpanElement>(null);

  /*
   * Uma timeline só, presa à rolagem do hero, cuida da transição inteira: o
   * nome e as redes viajam até o lado do M.0 e travam lá, o trilho sobe até o
   * marcador de sessão, a frase e o seletor de língua saem, e o cabeçalho da
   * sessão e a navegação entram.
   *
   * Nada aqui usa pin nem sticky. O palco já é fixo, então não existe salto de
   * layout no meio do caminho: é só transform, que é o que deixa a travada no
   * topo estável do jeito que o header da Vercel faz.
   */
  useLayoutEffect(() => {
    const raiz = raizRef.current;
    const nome = nomeRef.current;
    const sociais = sociaisRef.current;
    const vagaNome = vagaNomeRef.current;
    const vagaSociais = vagaSociaisRef.current;
    const pose = poseSessaoRef.current;
    const hero = document.querySelector<HTMLElement>(SELETOR_HERO);
    const nav = document.querySelector<HTMLElement>(SELETOR_NAV);
    const primeiroIcone = sociais?.firstElementChild as HTMLElement | null;

    if (!raiz || !nome || !sociais || !vagaNome || !vagaSociais || !pose) return;
    if (!hero || !primeiroIcone) return;

    const ctx = gsap.context(() => {
      const efemeros = gsap.utils.toArray<HTMLElement>("[data-efemero]", raiz);

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          // Um resto de inércia: a ancoragem persegue a rolagem em vez de
          // colar nela. É o que tira a sensação de elemento grudado.
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });

      tl
        // Marcador da frase, marcador da língua, frase rotativa e seletor: não
        // existem na pose ancorada e saem no começo da subida.
        .to(
          efemeros,
          { autoAlpha: 0, y: -18, duration: 0.3, stagger: 0.04, ease: "power1.in" },
          0,
        )
        /*
         * Os três tweens abaixo têm a mesma duração e a mesma curva de propósito:
         * o trilho e a bola roxa (que leem --p), o nome e as redes sobem no mesmo
         * compasso e chegam no mesmo quadro. Quando a bola encosta no ponto final,
         * o nome já está travado lá em cima.
         */
        .fromTo(
          raiz,
          { "--p": 0 },
          { "--p": 1, duration: DURACAO_SUBIDA, ease: CURVA_SUBIDA },
          0,
        )
        .fromTo(
          nome,
          { x: 0, y: 0, scale: 1, color: defaultTheme.colors.primary },
          {
            x: () => medirAncoragem(nome, nome, vagaNome, ESCALA_NOME_ANCORADO).x,
            y: () => medirAncoragem(nome, nome, vagaNome, ESCALA_NOME_ANCORADO).y,
            scale: ESCALA_NOME_ANCORADO,
            // No frame 16:11 o nome ancorado é cinza, não roxo.
            color: defaultTheme.colors.textToB1,
            duration: DURACAO_SUBIDA,
            ease: CURVA_SUBIDA,
          },
          0,
        )
        .fromTo(
          sociais,
          { x: 0, y: 0, scale: 1 },
          {
            x: () =>
              medirAncoragem(sociais, primeiroIcone, vagaSociais, ESCALA_SOCIAIS_ANCORADO).x,
            y: () =>
              medirAncoragem(sociais, primeiroIcone, vagaSociais, ESCALA_SOCIAIS_ANCORADO).y,
            scale: ESCALA_SOCIAIS_ANCORADO,
            // Único valor que a escala não resolve. Ver metricas.ts.
            columnGap: VAO_SOCIAIS_ANCORADO,
            duration: DURACAO_SUBIDA,
            ease: CURVA_SUBIDA,
          },
          0,
        )
        // Título e rótulo entram depois que a bola já parou no lugar dela.
        .fromTo(
          pose,
          { autoAlpha: 0, y: 16 },
          { autoAlpha: 1, y: 0, duration: 0.25, ease: "power2.out" },
          DURACAO_SUBIDA,
        );

      if (nav) {
        tl.fromTo(
          nav,
          { autoAlpha: 0, x: 24 },
          { autoAlpha: 1, x: 0, duration: 0.25, ease: "power2.out" },
          DURACAO_SUBIDA + 0.05,
        );
      }
    }, raizRef);

    /*
     * As fontes vêm do Google Fonts, ou seja, chegam depois do primeiro
     * layout. A largura do nome muda quando elas entram, e é dela que sai a
     * posição ancorada: sem este refresh a pose final fica deslocada.
     */
    let vivo = true;
    document.fonts?.ready.then(() => {
      if (vivo) ScrollTrigger.refresh();
    });

    return () => {
      vivo = false;
      ctx.revert();
    };
  }, []);

  /* Troca de sub-sessão: o rótulo não pisca, ele desliza. */
  useEffect(() => {
    const el = subtituloRef.current;
    if (!el) return;
    const tween = gsap.fromTo(
      el,
      { opacity: 0, y: 8 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
    );
    return () => {
      tween.kill();
    };
  }, [subsessao]);

  useEffect(() => {
    const el = tituloRef.current;
    if (!el) return;
    const tween = gsap.fromTo(
      el,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.55, ease: "power2.out" },
    );
    return () => {
      tween.kill();
    };
  }, [sessao]);

  return (
    <S.Raiz ref={raizRef}>
      <S.Palco>
        <S.Trilho data-trilho aria-hidden="true" />

        <S.CabecalhoAncorado>
          <S.Marca data-entrada>M.0</S.Marca>
          <S.ColunaVagas aria-hidden="true">
            <S.VagaNome ref={vagaNomeRef}>Arthur Marzano_</S.VagaNome>
            <S.VagaSociais ref={vagaSociaisRef} />
          </S.ColunaVagas>
        </S.CabecalhoAncorado>

        <S.ColunaHero>
          <S.Item>
            <S.ColunaMarcador>
              <S.SubidaMarcador>
                <S.Marcador data-entrada $tamanho={38} $destaque aria-hidden="true" />
              </S.SubidaMarcador>
            </S.ColunaMarcador>
            <S.BlocoIdentidade>
              <S.Nome ref={nomeRef}>
                <S.MascaraNome>
                  <S.TextoNome data-entrada>Arthur Marzano_</S.TextoNome>
                </S.MascaraNome>
              </S.Nome>
              <S.Sociais ref={sociaisRef} aria-label="Redes e contato">
                {redesSociais.map((rede) => (
                  <S.LinkSocial
                    key={rede.nome}
                    data-entrada
                    href={rede.href}
                    className="cursor-target"
                    aria-label={rede.nome}
                    title={rede.nome}
                    {...(rede.externo
                      ? { target: "_blank", rel: "noreferrer noopener" }
                      : {})}
                  >
                    <S.IconeSocial src={rede.icone} alt="" />
                  </S.LinkSocial>
                ))}
              </S.Sociais>
            </S.BlocoIdentidade>
          </S.Item>

          <S.ItemFrase data-efemero>
            <S.ColunaMarcador>
              <S.Marcador data-entrada $tamanho={29} aria-hidden="true" />
            </S.ColunaMarcador>
            <div data-entrada>
              <FraseRotativa frases={frasesDoHero} />
            </div>
          </S.ItemFrase>

          <S.ItemLingua data-efemero>
            <S.ColunaMarcador>
              <S.Marcador data-entrada $tamanho={16} aria-hidden="true" />
            </S.ColunaMarcador>
            <div data-entrada>
              <SeletorLingua />
            </div>
          </S.ItemLingua>
        </S.ColunaHero>

        <S.PoseSessao ref={poseSessaoRef} aria-hidden="true">
          <S.LinhaSessao>
            {/* Coluna vazia de propósito: o marcador desta linha é a bola roxa
                do nome, que subiu até aqui e ficou. */}
            <S.ColunaMarcador />
            <S.TituloSessao ref={tituloRef}>{sessao}</S.TituloSessao>
          </S.LinhaSessao>
          <S.LinhaSubsessao>
            <S.ColunaMarcador>
              <S.Marcador $tamanho={22} />
            </S.ColunaMarcador>
            <S.RotuloSubsessao ref={subtituloRef}>{subsessao}</S.RotuloSubsessao>
          </S.LinhaSubsessao>
        </S.PoseSessao>
      </S.Palco>
    </S.Raiz>
  );
};

export default PalcoFixo;
