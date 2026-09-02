import styled from "styled-components";

export const Cortina = styled.div`
  position: fixed;
  inset: 0;
  /* Abaixo do cursor customizado (9999) e acima de todo o resto. */
  z-index: 9990;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.background};
  /* A cortina sobe inteira no fim; a origem no topo evita o pulo de meio
     quadro que aconteceria se ela escalasse a partir do centro. */
  transform-origin: top center;
`;

/** Janela do logo: ele entra por baixo e sai por cima sem vazar da caixa. */
export const MascaraMarca = styled.span`
  display: block;
  overflow: hidden;
  /* Folga para a perna do "0" não encostar na borda da máscara. */
  padding: 0 0.2em 0.12em;
`;

export const MarcaAbertura = styled.span`
  display: inline-block;
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: 7.2rem;
  line-height: 1;
  color: ${(props) => props.theme.colors.primary};
`;
