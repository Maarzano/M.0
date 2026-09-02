import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    /* Ver FraseDia: centrado na faixa, e o fade de saída do <Sessao> é quem
       evita a colisão com o cabeçalho fixo. */
    align-items: center;
    padding: 6rem 6rem 6rem 15rem;
`;

export const Texto = styled.div`
    /* 1036px de largura no Figma. */
    max-width: 103.6rem;
    margin: 0 auto;
`;
