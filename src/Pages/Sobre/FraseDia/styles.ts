import styled from "styled-components";

export const Wrapper = styled.div`
    min-height: 100vh;
    width: 100%;
    display: flex;
    /*
     * Centrado na faixa: é o que põe o texto em 50vh, no meio da tela, no
     * ponto em que a seção está parada para leitura. Quem cuida de ele não
     * atropelar o cabeçalho fixo lá em cima é o fade de saída do <Sessao>,
     * calibrado justamente para zerar antes de o texto chegar nos 23vh do
     * cabeçalho.
     */
    align-items: center;
    /* x=245..1242 de 1440: o recuo à esquerda é o vão do trilho. */
    padding: 6rem 6rem 6rem 16rem;
`;

export const Citacao = styled.div`
    /* 997px de largura no Figma. */
    max-width: 99.7rem;
    margin: 0 auto;
`;
