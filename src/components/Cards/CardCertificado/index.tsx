/* eslint-disable @typescript-eslint/no-unused-vars */
import { EModalidadeCurso } from "../../../Types/EModalidadeCurso";
import type { ITecnologia } from "../../../Types/ITecnologia";
import { PlaceHolderDescricaoCertificado } from "./PlaceHolderDescricaoCertificado";
import { Wrapper } from "./styles";

interface CardCertificadoProps {
    img?: string;
    titulo: string;
    dataInicio: Date;
    dataFinal?: Date;
    modalidade: EModalidadeCurso;
    localizacao?: string;
    descricao: string;
    tecnologias: ITecnologia[]
}
const CardCertificado: React.FC<CardCertificadoProps> = ({
    titulo = "Curso sem Nome",
    dataInicio = new Date(),
    dataFinal = new Date("1"),
    modalidade = EModalidadeCurso.ONLINE,
    descricao = PlaceHolderDescricaoCertificado,
    tecnologias = []
}) => {
    return (
        <Wrapper className="cursor-target">
            {titulo}
        </Wrapper>
    );

}

export default CardCertificado;