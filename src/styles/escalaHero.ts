/**
 * Fator aplicado à coluna da esquerda do hero: nome, ícones sociais,
 * marcadores, frase rotativa e seletor de língua.
 *
 * As medidas base são as do frame 1:2 do Figma, em px. Mexer só neste número
 * escala a coluna inteira junto, sem tirar as proporções do lugar.
 *
 * O logo M.0 fica de fora de propósito — ele mantém o tamanho do Figma.
 */
export const ESCALA_HERO = 1.15;

/**
 * Converte uma medida em px do Figma para rem já escalada.
 * O html usa font-size 62.5%, então 1rem = 10px.
 */
export const doFigma = (px: number) => `${(px * ESCALA_HERO) / 10}rem`;
