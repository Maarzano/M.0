import bandeiraBrasil from "../../assets/svg/flag-br.svg";

export interface Lingua {
  codigo: string;
  nome: string;
  bandeira: string;
}

/**
 * Só pt-BR por enquanto: é a única bandeira que existe no frame do Figma, e o
 * projeto ainda não tem camada de i18n. O seletor já cicla pela lista, então
 * acrescentar um item aqui (com a bandeira em src/assets/svg) basta para ele
 * passar a alternar.
 */
export const linguas: Lingua[] = [
  {
    codigo: "pt-BR",
    nome: "Português (Brasil)",
    bandeira: bandeiraBrasil,
  },
];
