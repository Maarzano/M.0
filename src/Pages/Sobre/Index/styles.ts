import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    min-height: 100vh;
    position: relative;
`

/*
 * Cobre a seção inteira em vez de ficar preso a uma coluna. O drag do card usa
 * state.pointer, que é normalizado pelo retângulo do canvas — se o canvas for
 * menor que a seção, o card é cortado na borda dele e some. z-index acima do
 * texto porque o canvas é transparente e o texto continua visível por baixo.
 */
export const LanyardWrapper = styled.div`
    position: absolute;
    inset: 0;
    z-index: 1;
`

/* Figma: x=13, y=13, 48px. Reduzido para 40px a pedido — fica fora da
   escalaHero de propósito, para não acompanhar a coluna da esquerda. */
export const Logo = styled.span`
    position: absolute;
    left: 1.3rem;
    top: 1.3rem;
    z-index: 2;
    pointer-events: none;
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: 4rem;
    line-height: 1.27;
    color: ${(props) => props.theme.colors.primary};
`
