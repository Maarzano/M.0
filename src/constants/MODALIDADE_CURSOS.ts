export const MODALIDADE_CURSOS = {
    ONLINE: "Online",
    PRESENCIAL: "Presencial",
    HIBRIDA: "Híbrida"
} as const;

export type Modalidades = typeof MODALIDADE_CURSOS[keyof typeof MODALIDADE_CURSOS];