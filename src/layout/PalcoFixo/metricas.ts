import { doFigma } from "../../styles/escalaHero";

/*
 * Duas poses da mesma coluna, as duas tiradas do Figma:
 *
 *   pose hero      → frame 1:2  ("index"), coluna no meio da tela
 *   pose ancorada  → frame 16:11 ("Sobre mim/minha frase do dia"), colada no topo
 *
 * A timeline do palco interpola entre elas. Todo número daqui é medida de
 * Figma; as do hero passam por doFigma() porque a coluna do hero é escalada.
 */

/** Distância da borda esquerda do palco até a coluna dos marcadores. */
export const RECUO_ESQUERDO = "2.1rem";

/** Largura da coluna que centra os marcadores no trilho. */
export const COLUNA_MARCADOR = doFigma(36);

/** Vão entre a coluna do marcador e o texto ao lado. */
export const VAO_MARCADOR_TEXTO = doFigma(14);

/**
 * Topo da coluna do hero. 506/1024 do frame 1:2, mais os 2rem de margem do
 * Wrapper — assim a pose fixa cai exatamente onde a coluna caía no fluxo.
 *
 * As duas versões existem porque o valor é usado de dois jeitos: sozinho, em
 * top:, e como termo dentro de um calc() maior. Somas cruas evitam calc()
 * dentro de calc() na interpolação do trilho.
 */
export const SOMA_TOPO_COLUNA_HERO = "2rem + 49.4vh";
export const TOPO_COLUNA_HERO = `calc(${SOMA_TOPO_COLUNA_HERO})`;

/** Centro do primeiro marcador do hero, de onde o trilho parte. */
export const SOMA_TOPO_TRILHO_HERO = `${SOMA_TOPO_COLUNA_HERO} + ${doFigma(48)}`;

/** Centro do marcador de sessão ancorado: 201/1024 do frame 16:11. */
export const TOPO_TRILHO_ANCORADO = "19.6vh";

/**
 * Quanto o marcador roxo sobe até virar o marcador da sessão. Soma crua, para
 * ser multiplicada por --p dentro de um calc() sem calc() aninhado.
 *
 * É o mesmo --p que move o topo do trilho, então os dois sobem no mesmo
 * quadro: a bola não descola da ponta da linha em nenhum momento.
 */
export const SOMA_SUBIDA_MARCADOR = `${TOPO_TRILHO_ANCORADO} - (${SOMA_TOPO_TRILHO_HERO})`;

/** Distância entre o marcador da sessão e o da sub-sessão (243-201 no Figma). */
export const VAO_SESSAO_SUBSESSAO = doFigma(42);

/* ------------------------------------------------------------------ *
 * Ícones de rede
 * ------------------------------------------------------------------ */

/**
 * No Figma o quadro do ícone tem 29px, mas ao lado do nome em 48px eles
 * pesavam demais. 24px é o mesmo desenho com um passo menos de presença.
 */
export const ICONE_HERO = doFigma(24);

/** Vão do Figma (46px para ícone de 29) na proporção do ícone menor. */
export const VAO_SOCIAIS_HERO = doFigma(38);

/* ------------------------------------------------------------------ *
 * Pose ancorada do cabeçalho (nome + redes ao lado do M.0)
 * ------------------------------------------------------------------ */

/** Nome no cabeçalho: 24px no frame 16:11. */
export const NOME_ANCORADO = "2.4rem";

/** Ícone de rede no cabeçalho: 21.6px no frame 16:11. */
export const ICONE_ANCORADO = "2.16rem";

/**
 * Escalas da pose ancorada. São razão entre as duas medidas de Figma, não
 * chute: escalar por transform mantém a animação no compositor, sem relayout
 * a cada frame, e no fim da timeline o texto cai no tamanho exato do design.
 */
export const ESCALA_NOME_ANCORADO = 24 / (48 * 1.15);
export const ESCALA_SOCIAIS_ANCORADO = 21.615 / (24 * 1.15);

/**
 * O vão entre os ícones é a única medida que não sobrevive à escala: a folga do
 * hero e a do cabeçalho não estão na mesma razão dos ícones. Então ele é
 * interpolado à parte — 2.8rem porque a escala ainda vai reduzi-lo para os
 * ~22px do frame 16:11.
 */
export const VAO_SOCIAIS_ANCORADO = "2.8rem";
