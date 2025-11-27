/* eslint-disable @typescript-eslint/no-unused-vars */
import { EModalidadeCurso } from "../../../Types/EModalidadeCurso";
import type { IImg } from "../../../Types/IImg";
import type { ITecnologia } from "../../../Types/ITecnologia";
import { formatarDataMesAno } from "../../../utils/Datas";
import { PlaceHolderDescricaoCertificado } from "./PlaceHolderDescricaoCertificado";
import { DataInicioFim, DivDescricao, DivImg, DivModalidade_Localização, LocalizacaoContainer, Modalidade, TituloCertificado, Wrapper } from "./styles";

interface CardCertificadoProps {
    img: IImg;
    titulo: string;
    dataInicio: Date;
    dataFinal?: Date;
    modalidade: EModalidadeCurso;
    localizacao?: string;
    descricao: string;
    tecnologias: ITecnologia[]
}
const CardCertificado: React.FC<CardCertificadoProps> = ({
    img = { 
        imgSrc: "/public/assets/imgs/PlaceHolderImg1WHITE.png",
    },
    titulo = "Curso sem Nome",
    dataInicio = new Date("06/01/2025"),
    dataFinal,
    modalidade = EModalidadeCurso.ONLINE,
    localizacao,
    descricao = PlaceHolderDescricaoCertificado,
    tecnologias = []
}) => {

    const iconSrc =
        modalidade === EModalidadeCurso.PRESENCIAL
            ? "/public/assets/svg/presencialIcon.svg"
            : "/public/assets/svg/OnlineIcon.svg";
    return (
        <Wrapper className="cursor-target">
            <DivImg $background={img.background}>
                <img src={img.imgSrc}/>
            </DivImg>
            <TituloCertificado>
                {titulo}
            </TituloCertificado>
            <DataInicioFim>
                {formatarDataMesAno(dataInicio)} - {dataFinal ? formatarDataMesAno(dataFinal) : 'Atualmente'}
            </DataInicioFim>
            <DivModalidade_Localização>
                <Modalidade>
                    <img src={iconSrc}/>
                    {modalidade.toString()}
                </Modalidade>
                {modalidade != EModalidadeCurso.ONLINE && (
                    <LocalizacaoContainer>
                        <img src="/public/assets/svg/localizaçãoIcon.svg" alt="Localização" />
                        {localizacao}
                    </LocalizacaoContainer>
                )}
            </DivModalidade_Localização>
            <DivDescricao>
                {descricao.toString()}
            </DivDescricao>
            
        </Wrapper>
    );

}

export default CardCertificado;