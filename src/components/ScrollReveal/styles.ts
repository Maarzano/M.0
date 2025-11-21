import styled, { css } from "styled-components";

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
}))<{ size: string; textAlign: string; $showQuotes?: boolean }>`
  font-size: ${props => props.size};
  line-height: 1.5;
  font-weight: 600;
  text-align: ${props => props.textAlign};
  
  position: relative;
  display: inline-block; 
  padding: 0.2em 0.6em;

  ${(props) => props.$showQuotes && css`
    &::before,
    &::after {
        content: "";
        position: absolute;
        width: 0.4em;
        height: 0.4em; 
        background-color: #9F35FF;
        
        mask-image: url("/public/svg/quote.svg");
        mask-repeat: no-repeat;
        mask-size: contain;
    }

    &::before {
        top: -0.1em;
        left: -0.1em;
    }

    &::after {
        bottom: -0.1em;
        right: -0.1em;
        transform: rotate(180deg);
    }
  `}
`;