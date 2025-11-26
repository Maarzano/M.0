import CardCertificado from "../../../components/Cards/CardCertificado";
import { EModalidadeCurso } from "../../../Types/EModalidadeCurso";
import { Wrapper } from "./styles";

const FormacaoCertificado = () => {
    return (
        <Wrapper>
            <CardCertificado 
                img={{imgSrc: "/public/assets/imgs/unaIconQuadradovermelho.png", background: "#E60026"}}
                titulo={"Ciência da Computação"}
                dataInicio={new Date("05/21/2025")}
                modalidade={EModalidadeCurso.PRESENCIAL}
                localizacao="UNA - Aimorés"
                descricao="Formação acadêmica robusta em Ciência da Computação com ênfase no desenvolvimento e gestão de soluções tecnológicas inovadoras. O currículo forneceu uma base sólida em Engenharia de Software, Estrutura de Dados e Algoritmos..."
                tecnologias={[]} >
                
            </CardCertificado>
        </Wrapper>
    );
}

export default FormacaoCertificado;