import type { NomeTecnologia } from "../constants/NOME_TECNOLOGIAS";

export interface ITecnologia {
    nome: NomeTecnologia,
    descricao?: string,
    img: string,
    link?: string
}