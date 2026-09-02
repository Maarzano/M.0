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
