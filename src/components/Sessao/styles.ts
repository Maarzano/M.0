import styled from "styled-components";

export const Secao = styled.section`
  position: relative;
  width: 100%;
`;

/*
 * Duas camadas em vez de uma porque são dois movimentos com faixas de rolagem
 * diferentes: a de dentro cuida da chegada, a de fora da saída. Separadas,
 * nenhuma das duas timelines escreve na mesma propriedade do mesmo elemento —
 * é o que evita o tranco no ponto em que uma termina e a outra começa.
 */
export const Saida = styled.div`
  will-change: transform, opacity;
`;

export const Entrada = styled.div`
  will-change: transform, opacity;
`;

/*
 * O título visível ("Sobre mim / Minha frase do dia") é desenhado no palco
 * fixo, fora desta seção. Sem este par aqui a seção ficaria sem cabeçalho na
 * árvore de acessibilidade e o leitor de tela perderia a divisão da página.
 */
export const TituloAcessivel = styled.h2`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
`;
