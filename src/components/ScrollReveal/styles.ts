import styled from "styled-components";

export const StyledH2 = styled.h2.attrs(props => ({
  className: `scroll-reveal ${props.className}`
}))`
  margin: 20px 0;
  
  .word {
    display: inline-block;
  }
`;

export const StyledP = styled.p.attrs(props => ({
  className: `scroll-reveal-text ${props.className}`
}))<{ size: string, textAlign: string }>`
  font-size: ${props => props.size};
  line-height: 1.5;
  font-weight: 600;
  text-align: ${props => props.textAlign}
`;