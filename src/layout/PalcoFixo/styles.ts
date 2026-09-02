import styled from "styled-components";
import { doFigma } from "../../styles/escalaHero";
import {
  COLUNA_MARCADOR,
  ICONE_ANCORADO,
  ICONE_HERO,
  NOME_ANCORADO,
  RECUO_ESQUERDO,
  SOMA_SUBIDA_MARCADOR,
  SOMA_TOPO_TRILHO_HERO,
  TOPO_COLUNA_HERO,
  TOPO_TRILHO_ANCORADO,
  VAO_MARCADOR_TEXTO,
  VAO_SESSAO_SUBSESSAO,
  VAO_SOCIAIS_HERO,
} from "./metricas";

/**
 * Camada fixa por cima de tudo que rola. Fica fora do conteúdo do
 * ScrollSmoother de propósito: lá dentro o conteúdo é transformado e position
 * fixed passaria a valer em relação a ele, não à viewport.
 *
 * --p é o progresso da ancoragem (0 = pose hero, 1 = pose ancorada). Quem lê
 * é o trilho; o resto é animado por transform direto.
 */
export const Raiz = styled.div`
  --p: 0;
  position: fixed;
  inset: 0;
  z-index: 40;
  /* Só os elementos realmente clicáveis reativam o ponteiro: o canvas do
     crachá 3D fica atrás e precisa continuar arrastável através do palco. */
  pointer-events: none;
`;

/**
 * Repete a caixa do Wrapper do App (95vw centrado) para que left: 2.1rem aqui
 * caia no mesmo pixel em que caía quando a coluna estava no fluxo.
 */
export const Palco = styled.div`
  position: relative;
  width: 95vw;
  height: 100%;
  margin: 0 auto;
`;

export const Trilho = styled.span`
  position: absolute;
  /* Centrado na coluna dos marcadores. O -1px compensa a espessura do próprio
     trilho, senão ele fica meio pixel à direita do centro dos discos. */
  left: calc(${RECUO_ESQUERDO} + ${COLUNA_MARCADOR} / 2 - 1px);
  /* Sobe do centro do primeiro marcador do hero até o marcador de sessão. */
  top: calc(
    (${SOMA_TOPO_TRILHO_HERO}) * (1 - var(--p)) + ${TOPO_TRILHO_ANCORADO} * var(--p)
  );
  bottom: 0;
  width: 2px;
  transform-origin: top center;
  background-color: ${(props) => props.theme.colors.textToB1};
`;

/* ------------------------------------------------------------------ *
 * Cabeçalho ancorado: M.0 + a vaga onde o nome e as redes vão parar
 * ------------------------------------------------------------------ */

export const CabecalhoAncorado = styled.div`
  position: absolute;
  /* Figma: M.0 em 13,13 em todos os frames. */
  left: 1.3rem;
  top: 1.3rem;
  display: flex;
  /* O nome alinha pelo TOPO do M.0 (13 e 13 no Figma), não pelo centro. */
  align-items: flex-start;
  /* 130-13-101: folga entre a caixa do logo e o nome no frame 16:11. */
  gap: 1.6rem;
`;

export const Marca = styled.span`
  font-family: ${(props) => props.theme.fonts.heading};
  /* Fora da escala do hero de propósito: o logo mantém tamanho próprio. */
  font-size: 4rem;
  line-height: 1.27;
  color: ${(props) => props.theme.colors.primary};
`;

/**
 * Nome e ícones não são desenhados aqui — quem desenha é a coluna do hero, que
 * viaja até cá. Estes dois são só réguas: a timeline mede a posição deles e
 * translada os elementos de verdade para cima delas, então a pose ancorada sai
 * exata sem nenhuma coordenada mágica no JS.
 */
export const ColunaVagas = styled.div`
  display: flex;
  flex-direction: column;
  visibility: hidden;
`;

export const VagaNome = styled.span`
  font-family: ${(props) => props.theme.fonts.main};
  font-size: ${NOME_ANCORADO};
  line-height: 1.5;
  white-space: nowrap;
`;

export const VagaSociais = styled.span`
  /* Só a origem importa: é o alvo do primeiro ícone.
     143-130 na horizontal e 46-(13+36) na vertical, medidas do frame 16:11. */
  width: 0;
  height: ${ICONE_ANCORADO};
  margin-left: 1.3rem;
  margin-top: -0.3rem;
`;

/* ------------------------------------------------------------------ *
 * Pose hero: coluna do meio da tela (frame 1:2)
 * ------------------------------------------------------------------ */

export const ColunaHero = styled.div`
  position: absolute;
  left: ${RECUO_ESQUERDO};
  top: ${TOPO_COLUNA_HERO};
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: ${VAO_MARCADOR_TEXTO};
  position: relative;
`;

export const ColunaMarcador = styled.div`
  width: ${COLUNA_MARCADOR};
  flex: none;
  display: flex;
  justify-content: center;
`;

export const Marcador = styled.span<{ $tamanho: number; $destaque?: boolean }>`
  width: ${(props) => doFigma(props.$tamanho)};
  height: ${(props) => doFigma(props.$tamanho)};
  border-radius: 50%;
  flex: none;
  background-color: ${(props) =>
    props.$destaque ? props.theme.colors.primary : props.theme.colors.textToB1};
`;

/**
 * A bola roxa do nome não desaparece na ancoragem: ela sobe até o ponto onde o
 * trilho passa a nascer e vira o marcador da sessão.
 *
 * A subida mora neste invólucro, e não no disco, porque o disco é alvo da
 * cascata da abertura: ao transformar um elemento o GSAP escreve
 * `translate: none; rotate: none; scale: none` inline nele para neutralizar as
 * propriedades individuais — e isso apagaria a subida. Em dois elementos as
 * duas transformações se multiplicam e ninguém sobrescreve ninguém.
 *
 * Ler --p (em vez de ganhar um tween próprio) é o que garante que a bola e o
 * topo do trilho andem no mesmo quadro, sem nunca descolar.
 */
export const SubidaMarcador = styled.span`
  display: flex;
  flex: none;
  translate: 0 calc((${SOMA_SUBIDA_MARCADOR}) * var(--p));
`;

export const BlocoIdentidade = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Nome = styled.h1`
  font-family: ${(props) => props.theme.fonts.main};
  font-size: ${doFigma(48)};
  font-weight: normal;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.primary};
  white-space: nowrap;
  /* A timeline escala e translada a partir daqui; com a origem no canto o
     ponto de ancoragem não escorrega enquanto a escala cai. */
  transform-origin: left top;
`;

/** Janela do nome na abertura: o texto sobe de baixo para dentro dela. */
export const MascaraNome = styled.span`
  display: block;
  overflow: hidden;
`;

export const TextoNome = styled.span`
  display: inline-block;
`;

export const Sociais = styled.nav`
  display: flex;
  align-items: center;
  /* Folga do frame 1:2, na proporção do ícone reduzido. */
  gap: ${VAO_SOCIAIS_HERO};
  /* 135-71: os ícones começam recuados em relação ao nome. */
  padding-left: ${doFigma(64)};
  /* O nome tem line-height 1.5, então a caixa dele termina 5px abaixo do
     desenho; o Figma encosta os ícones nesse vão. */
  margin-top: ${doFigma(-5)};
  transform-origin: left top;
`;

export const LinkSocial = styled.a`
  /* Altura fixa para os quatro, largura livre: é o que deixa os ícones
     opticamente do mesmo tamanho, já que envelope é naturalmente mais largo
     que alto e a seta de download mais alta que larga. O min-width evita que
     os mais estreitos deixem o espaçamento irregular. */
  height: ${ICONE_HERO};
  min-width: ${ICONE_HERO};
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
  pointer-events: auto;
  opacity: 0.85;
  transition: opacity 0.2s ease;

  &:hover,
  &:focus-visible {
    opacity: 1;
  }
`;

export const IconeSocial = styled.img`
  height: 100%;
  width: auto;
`;

export const ItemFrase = styled(Item)`
  /* 641-602: folga entre o bloco do nome e a frase. */
  margin-top: ${doFigma(39)};
`;

export const ItemLingua = styled(Item)`
  /* 726-671: folga entre a frase e o seletor de língua. */
  margin-top: ${doFigma(55)};
`;

/* ------------------------------------------------------------------ *
 * Pose ancorada da sessão: título + sub-título no topo (frame 16:11)
 * ------------------------------------------------------------------ */

export const PoseSessao = styled.div`
  position: absolute;
  left: ${RECUO_ESQUERDO};
  /* O topo daqui é o centro do marcador de 38px, o mesmo ponto de onde o
     trilho passa a sair. As duas linhas se penduram nele. */
  top: ${TOPO_TRILHO_ANCORADO};
`;

export const LinhaSessao = styled(Item)`
  position: absolute;
  top: 0;
  left: 0;
  /* Centra a linha no ponto de ancoragem: o marcador cai em cima do trilho
     independentemente da altura que o título tiver. */
  transform: translateY(-50%);
  white-space: nowrap;
`;

export const LinhaSubsessao = styled(LinhaSessao)`
  top: ${VAO_SESSAO_SUBSESSAO};
`;

export const TituloSessao = styled.span`
  font-family: ${(props) => props.theme.fonts.main};
  font-size: ${doFigma(48)};
  font-weight: 600;
  line-height: 1.25;
  color: ${(props) => props.theme.colors.titulo};
`;

export const RotuloSubsessao = styled.span`
  font-family: ${(props) => props.theme.fonts.main};
  font-size: ${doFigma(24)};
  line-height: 1.25;
  color: ${(props) => props.theme.colors.textToB1};
`;
