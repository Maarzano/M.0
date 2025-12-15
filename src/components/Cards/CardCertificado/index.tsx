/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useLayoutEffect, useMemo, useRef, useState } from 'react';
import { EModalidadeCurso } from "../../../Types/EModalidadeCurso";
import type { IImg } from "../../../Types/IImg";
import type { ITecnologia } from "../../../Types/ITecnologia";
import { formatarDataMesAno } from "../../../utils/Datas";
import { PlaceHolderDescricaoCertificado } from "./PlaceHolderDescricaoCertificado";
import { DataInicioFim, DivDescricao, DivImg, DivLogoLoop, DivModalidade_Localização, Expandir, LocalizacaoContainer, Modalidade, TituloCertificado, Wrapper } from "./styles";
import LogoLoop, { type LogoItem } from '../../LogoLoop';
import ToolTipTab from '../../ToolTip';

interface CardCertificadoProps {
    img: IImg;
    titulo: string;
    dataInicio: Date;
    dataFinal?: Date;
    modalidade?: EModalidadeCurso;
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

    const techLogos: LogoItem[] = useMemo(() => {
        return tecnologias.map((tech) => ({
            src: tech.img,
            alt: tech.nome,
            title: tech.nome,
            href: tech.link,
        }));
    }, [tecnologias]);

    const renderTechItem = (item: LogoItem) => {
        const img = (
            <img 
                src={(item as any).src} 
                alt={(item as any).alt} 
                draggable={false}
            />
        );

        const withTooltip = (
            <ToolTipTab label={(item as any).title || ''} direction={"90px"}>
                {img}
            </ToolTipTab>
        );

        return (item as any).href ? (
            <a 
                href={(item as any).href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="logoloop__link" 
                draggable={false}
            >
                {withTooltip}
            </a>
        ) : withTooltip;
    };

    const tituloRef = useRef<HTMLHeadingElement>(null);
    
    const [linhasDescricao, setLinhasDescricao] = useState(3);

    useLayoutEffect(() => {
        if (tituloRef.current) {
            const alturaTitulo = tituloRef.current.clientHeight;

            if (alturaTitulo > 60) {
                setLinhasDescricao(4);
            } else {
                setLinhasDescricao(5);
            }
        }
    }, [titulo]);

    return (
        <Wrapper className="cursor-target">
            <DivImg $background={img.background}>
                <img src={img.imgSrc} alt={titulo} />
            </DivImg>
            
            <TituloCertificado ref={tituloRef}>
                {titulo}
            </TituloCertificado>
            
            <DataInicioFim>
                {formatarDataMesAno(dataInicio)} - {dataFinal ? formatarDataMesAno(dataFinal) : 'Atualmente'}
            </DataInicioFim>
            
            <DivModalidade_Localização>
                <Modalidade>
                    <img src={iconSrc} alt="Ícone modalidade" />
                    {modalidade.toString()}
                </Modalidade>
                {modalidade !== EModalidadeCurso.ONLINE && (
                    <LocalizacaoContainer>
                        <img src="/public/assets/svg/localizaçãoIcon.svg" alt="Localização" />
                        {localizacao}
                    </LocalizacaoContainer>
                )}
            </DivModalidade_Localização>
            
            <DivDescricao $linhas={linhasDescricao}>
                {descricao.toString()}
            </DivDescricao>

            {techLogos.length > 0 && (
                <DivLogoLoop>
                    <LogoLoop 
                        logos={techLogos}
                        speed={35}
                        scaleOnHover
                        logoHeight={50}
                        gap={30}
                        direction="left"
                        pauseOnHover={true}
                        fadeOut={true}
                        fadeOutColor='#1B1A1C'
                        ariaLabel="Tecnologias utilizadas"
                        draggable
                        renderItem={renderTechItem}
                    />
                </DivLogoLoop>
            )}

            <Expandir className='Expandir'>
                Expandir
                <img src='/public/assets/svg/arrow.svg'/>
            </Expandir>
        </Wrapper>
    );
}

export default CardCertificado;