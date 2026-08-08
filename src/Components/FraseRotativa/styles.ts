import styled from "styled-components";
import { doFigma } from "../../styles/escalaHero";

export const Texto = styled.p`
  font-family: ${(props) => props.theme.fonts.main};
  font-size: ${doFigma(20)};
  line-height: 1.5;
  color: ${(props) => props.theme.colors.textToB1};
  white-space: nowrap;
  /* Trava a altura da linha: sem isso o bloco colapsa quando o texto zera
     entre uma frase e outra, e a linha inteira dá um pulo. */
  min-height: ${doFigma(30)};
`;

export const Cursor = styled.span`
  display: inline-block;
  margin-left: 0.2rem;
  color: ${(props) => props.theme.colors.primary};
  animation: piscarCursor 1s steps(1, end) infinite;

  @keyframes piscarCursor {
    0%,
    50% {
      opacity: 1;
    }
    50.01%,
    100% {
      opacity: 0;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;
