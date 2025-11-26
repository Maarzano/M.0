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
  line-height: 1.2;
  font-weight: 600;
  text-align: ${props => props.textAlign};
  
  position: relative;
  display: inline-block; 
  
  padding: 0; 

  ${(props) => props.$showQuotes && css`
    &::before,
    &::after {
        content: "";
        display: inline-block;
        vertical-align: top;
        
        width: 0.9em;
        height: 0.9em; 
        
        background-color: ${props => props.theme.colors.primary};
        
        mask-image: url("/assets/svg/quote.svg");
        mask-repeat: no-repeat;
        mask-size: contain;
    }

    &::before {
        margin-right: 0.3em; 
        
        transform: translateY(0%); 
    }

    &::after {
        margin-left: 0.1em; 
        
        transform: rotate(180deg) translateY(-45%); 
    }
  `}
`;