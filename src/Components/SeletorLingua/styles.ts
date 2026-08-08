import styled from "styled-components";
import { doFigma } from "../../styles/escalaHero";

export const Grupo = styled.div`
  display: flex;
  align-items: center;
  /* 150-141: vão entre o rótulo e o quadro da bandeira no Figma */
  gap: ${doFigma(9)};
`;

export const Rotulo = styled.span`
  font-family: ${(props) => props.theme.fonts.main};
  font-size: ${doFigma(20)};
  line-height: 1.5;
  color: ${(props) => props.theme.colors.textToB1};
  white-space: nowrap;
`;

export const Botao = styled.button`
  /* Quadro de 51x51 do Figma; o desenho dentro dele é mais baixo. */
  width: ${doFigma(51)};
  height: ${doFigma(51)};
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background: none;
  pointer-events: auto;
`;

export const Bandeira = styled.img`
  /* viewBox 51 x 34.55 — altura explícita para não esticar no quadro quadrado. */
  width: ${doFigma(51)};
  height: ${doFigma(34.55)};
`;
