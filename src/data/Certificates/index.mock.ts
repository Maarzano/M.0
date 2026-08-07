import type { NomeTecnologia } from "../../constants/NOME_TECNOLOGIAS";
import { MODALIDADE_CURSOS } from "../../constants/MODALIDADE_CURSOS";
import { AllTecnologies } from "../Tecnologies";
import type { CardCertificadoProps } from "../../components/Cards/CardCertificado";

interface ICard extends CardCertificadoProps {
  id: number
}

export const certificadosMock: ICard[] = [
  {
    id: 1,
    titulo: "Ciência da Computação",
    img: { imgSrc: "/assets/imgs/unaIconQuadradoVermelho.png", background: "#E60026" },
    dataInicio: new Date("05/21/2025"),
    modalidade: MODALIDADE_CURSOS.PRESENCIAL,
    localizacao: "UNA - Aimorés",
    descricao: "Formação acadêmica robusta em Ciência da Computação com ênfase no desenvolvimento e gestão de soluções tecnológicas inovadoras. O currículo forneceu uma base sólida em Engenharia de Software, Estrutura de Dados e Algoritmos.",
    tecnologias: AllTecnologies.filter(tech => 
      (["Git", "Python", "GitHub", "MySQL", "Java"] as NomeTecnologia[]).includes(tech.nome))
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
    tecnologias: AllTecnologies.filter(tech => 
      (["Git", "SqlServer", "C++", "Python", "GitHub", "MySQL", "Java"] as NomeTecnologia[]).includes(tech.nome))
  },
];