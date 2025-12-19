import type { NomeTecnologia } from "../../constants/NOME_TECNOLOGIAS";
import { MODALIDADE_CURSOS } from "../../constants/MODALIDADE_CURSOS";


export const certificadosMock = [
  {
    id: 1,
    titulo: "Ciência da Computação",
    img: { imgSrc: "public/assets/imgs/unaIconQuadradovermelho.png", background: "#E60026" },
    dataInicio: new Date("05/21/2025"),
    modalidade: MODALIDADE_CURSOS.PRESENCIAL,
    localizacao: "UNA - Aimorés",
    descricao: "Formação acadêmica robusta em Ciência da Computação com ênfase no desenvolvimento e gestão de soluções tecnológicas inovadoras. O currículo forneceu uma base sólida em Engenharia de Software, Estrutura de Dados e Algoritmos.",
    tecnologias: techsComputacao
  },
  {
    id: 2,
    titulo: "Desenvolvimento de Sistemas",
    img: { imgSrc: "/assets/imgs/SenaiIcon.png", background: "#FF0000" },
    dataInicio: new Date("03/11/2024"),
    dataFinal: new Date("08/17/2025"),
    modalidade: MODALIDADE_CURSOS.PRESENCIAL,
    localizacao: "SENAI - CTTI",
    descricao: "Formação técnica em Desenvolvimento de Sistemas pelo SENAI, com foco na criação de soluções de software escaláveis e alinhadas às tecnologias utilizadas no mercado, proporcionando base sólida em lógica de programação, desenvolvimento de aplicações e boas práticas de engenharia de software.",
    tecnologias: [
        { nome: "Java", img: "/assets/svg/java.svg"},
        { nome: "C++", img: "/assets/svg/cpp.svg"},
        { nome: "SqlServer", img: "/assets/svg/sql-server.svg"},
        { nome: "MySQL", img: "/assets/svg/mysql-icon-light.svg"},
        { nome: "Git", img: "/assets/svg/git.svg"},
        { nome: "GitHub", img: "/assets/svg/github_light.svg"}
    ]
  },
];