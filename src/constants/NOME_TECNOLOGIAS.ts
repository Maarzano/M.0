export const NOME_TECNOLOGIAS = {
    GIT: "Git",
    CPP: "C++",
    GITHUB: "GitHub",
    JAVA: "Java",
    MYSQL: "MySQL",
    PYTHON: "Python",
    SQLERVER: "SqlServer"
} as const;

// Isso extrai o tipo "Git" | "SqlServer" | ...
export type NomeTecnologia = (typeof NOME_TECNOLOGIAS)[keyof typeof NOME_TECNOLOGIAS];