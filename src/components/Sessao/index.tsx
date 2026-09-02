import { useLayoutEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRegistraSessao } from "../../contexts/sessaoAtiva";
import { prefereMenosMovimento } from "../../hooks/usePrefereMenosMovimento";
import { Entrada, Saida, Secao, TituloAcessivel } from "./styles";

gsap.registerPlugin(ScrollTrigger);

interface SessaoProps {
  /** Sessão a que o bloco pertence: "Sobre mim", "Portfólio"... */
  sessao: string;
  /** Sub-sessão deste bloco: "Minha frase do dia", "Apresentação"... */
  subsessao?: string;
  children: ReactNode;
}

/**
 * Envelope de uma sub-sessão da página. Faz duas coisas:
 *
 *  - anuncia os rótulos para o cabeçalho ancorado do palco fixo enquanto está
 *    em tela, e deixa um título oculto para a árvore de acessibilidade;
 *  - dá o revezamento entre seções: a que chega sobe aparecendo aos poucos, a
 *    que sai continua subindo e some. As duas presas à rolagem (scrub), então
 *    o movimento é reversível e acompanha o dedo.
 */
const Sessao = ({ sessao, subsessao, children }: SessaoProps) => {
  const ref = useRef<HTMLElement>(null);
  const entradaRef = useRef<HTMLDivElement>(null);
  const saidaRef = useRef<HTMLDivElement>(null);

  useRegistraSessao(ref, sessao, subsessao);

  useLayoutEffect(() => {
    const secao = ref.current;
    const entrada = entradaRef.current;
    const saida = saidaRef.current;
    if (!secao || !entrada || !saida || prefereMenosMovimento()) return;

    const ctx = gsap.context(() => {
      /*
       * As duas faixas saem de uma conta só. Com u = scrollY - topo da seção e
       * o conteúdo centrado em 50vh, ele aparece na base da tela em u=-50vh,
       * fica no meio em u=0 e encosta nos 23vh do cabeçalho fixo em u=+27vh.
       *
       *   chegada  u de -100vh a -20vh  →  "top bottom" até "top 20%"
       *   saída    u de  +5vh  a +27vh  →  "bottom 95%"  até "bottom 73%"
       *
       * As faixas não se encostam: entre u=-20vh e u=+5vh o bloco fica opaco,
       * que é a janela de leitura. E o fade de saída termina antes de o texto
       * alcançar o cabeçalho — é o que impede a sobreposição, já que o
       * cabeçalho é fixo e o conteúdo passa por baixo dele.
       */
      gsap.fromTo(
        entrada,
        { yPercent: 4, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: secao,
            start: "top bottom",
            end: "top 20%",
            scrub: true,
          },
        },
      );

      gsap.fromTo(
        saida,
        { yPercent: 0, opacity: 1 },
        {
          yPercent: -4,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: secao,
            start: "bottom 95%",
            end: "bottom 73%",
            scrub: true,
          },
        },
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <Secao ref={ref}>
      <TituloAcessivel>{subsessao ? `${sessao} — ${subsessao}` : sessao}</TituloAcessivel>
      <Saida ref={saidaRef}>
        <Entrada ref={entradaRef}>{children}</Entrada>
      </Saida>
    </Secao>
  );
};

export default Sessao;
