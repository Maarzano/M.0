import styled from "styled-components";
import { doFigma } from "../../styles/escalaHero";

/*
 * Medidas tiradas do frame 1:2 do Figma (1440x1024) e passadas por doFigma(),
 * que aplica o fator único de escala do hero.
 *
 * Referências no Figma:
 *   trilho ............ x=39, de y=548 até o rodapé
 *   marcadores ........ 38px / 29px / 16px, centrados no trilho
 *   coluna de texto ... x=71
 */

/** Distância da borda esquerda. Fora da escala: é ancoragem, não conteúdo. */
const RECUO_ESQUERDO = "2.1rem";

export const Container = styled.div`
  position: absolute;
  left: ${RECUO_ESQUERDO};
  /*
   * 506/1024 da altura do hero. Em vh, não %, porque o container agora é o
   * Wrapper do App — que tem a altura de todas as seções somadas, não a do
   * hero. O hero é min-height 100vh, então 49.4vh cai no mesmo ponto.
   */
  top: 49.4vh;
  /* Até o fim do documento: a linha atravessa todas as seções. */
  bottom: 0;
  z-index: 2;
  /* O canvas do Lanyard fica embaixo. Deixar o container transparente a
     cliques mantém o card arrastável por trás do texto; só os elementos
     realmente interativos reativam o ponteiro. */
  pointer-events: none;
`;

export const ColunaMarcador = styled.div`
  width: ${doFigma(36)};
  flex: none;
  display: flex;
  justify-content: center;
`;

export const Trilho = styled.span`
  position: absolute;
  /* Centrado na coluna dos marcadores, seja qual for a escala. O -1px
     compensa a própria espessura do trilho, senão ele fica meio pixel à
     direita do centro dos discos. */
  left: calc(${doFigma(36)} / 2 - 1px);
  /* Começa no centro do primeiro marcador. O disco cobre qualquer diferença
     de arredondamento na origem da linha. */
  top: ${doFigma(48)};
  bottom: 0;
  width: 2px;
  background-color: ${(props) => props.theme.colors.textToB1};
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: ${doFigma(14)};
  position: relative;
`;

export const Marcador = styled.span<{ $tamanho: number; $destaque?: boolean }>`
  width: ${(props) => doFigma(props.$tamanho)};
  height: ${(props) => doFigma(props.$tamanho)};
  border-radius: 50%;
  flex: none;
  background-color: ${(props) =>
    props.$destaque ? props.theme.colors.primary : props.theme.colors.textToB1};
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
`;

export const Sociais = styled.nav`
  display: flex;
  align-items: center;
  /* 210-135-29: distância entre os quadros de 29px no Figma */
  gap: ${doFigma(46)};
  /* 135-71: os ícones começam recuados em relação ao nome */
  padding-left: ${doFigma(64)};
  /* O nome tem line-height 1.5, então a caixa dele termina 5px abaixo do
     desenho; o Figma encosta os ícones nesse vão. */
  margin-top: ${doFigma(-5)};
`;

export const LinkSocial = styled.a`
  /* Altura fixa para os quatro, largura livre: é o que deixa os ícones
     opticamente do mesmo tamanho, já que envelope é naturalmente mais largo
     que alto e a seta de download mais alta que larga. O min-width evita que
     os mais estreitos deixem o espaçamento irregular. */
  height: ${doFigma(29)};
  min-width: ${doFigma(29)};
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
  /* 641-602: folga entre o bloco do nome e a frase */
  margin-top: ${doFigma(39)};
`;

export const ItemLingua = styled(Item)`
  /* 726-671: folga entre a frase e o seletor de língua */
  margin-top: ${doFigma(55)};
`;
