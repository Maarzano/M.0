import CardCertificado from "../../../components/Cards/CardCertificado";
import { EModalidadeCurso } from "../../../Types/EModalidadeCurso";
import { Wrapper } from "./styles";

const FormacaoCertificado = () => {
    return (
        <Wrapper>
            <CardCertificado 
                titulo={"TESTE"} 
                dataInicio={new Date} 
                modalidade={EModalidadeCurso.ONLINE} 
                descricao={""} 
                tecnologias={[]}
            >
            </CardCertificado>
        </Wrapper>
    );
}

export default FormacaoCertificado;