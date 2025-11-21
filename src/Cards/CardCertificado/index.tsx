import { EModalidadeCurso } from "../../Types/EModalidadeCurso";
import type { Tecnologia } from "../../Types/Tecnologia";
import { PlaceHolderDescricaoCertificado } from "./PlaceHolderDescricaoCertificado";

interface CardCertificadoProps {
    img?: string;
    titulo: string;
    dataInicio: Date;
    dataFinal?: Date;
    modalidade: EModalidadeCurso;
    localizacao?: string;
    descricao: string;
    tecnologias: Tecnologia[]
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
        <p>
            oie {titulo} {dataInicio.toString()} {dataFinal?.toString()} {descricao} {modalidade} {tecnologias[0]?.nome}
        </p>
    );

}

export default CardCertificado;