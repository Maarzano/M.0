import styled from "styled-components";

export const Wrapper = styled.div`
    width: 50rem;
    height: 67rem;
    border-radius: 3rem;
    background-color: ${props => props.theme.colors.background2};
    padding: 0.78rem;
    overflow: hidden;
    &:hover {
        .Expandir {
            color: ${props => props.theme.colors.textToB1};;
            transform: scale(1.05);
        }

        .Expandir::after {
            width: 100%;
        }

        .Expandir img {
            filter: brightness(0) invert(1);
        }
    }
`

export const DivImg = styled.div<{ $background?: string }>`
    width: 100%;
    height: 35%;
    background-color: ${props => props.$background};
    border-radius: 3rem;

    img {
        height: 100%;
        width: 100%;
        object-fit: contain;
    }
`

export const TituloCertificado = styled.h2`
    margin: 0.5rem 0 0.7rem 2rem;
    font-size: 3rem;
    font-weight: 900;
`

export const DataInicioFim = styled.p`
    text-align: end;
    color: ${props => props.theme.colors.cinzaSecundario};
`

export const DivModalidade_Localização = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    margin-left: 1.3rem;
    margin-top: 0.5rem;
`

export const Modalidade = styled.div`
    display: flex;
    align-items: start;
    justify-content: start;
    gap: 0.9rem;
    font-size: 1.6rem;

    img {
        width: 1.7rem;
        height: 1.7rem;
        object-fit: contain;
    }
`
export const LocalizacaoContainer = Modalidade;

export const DivDescricao = styled.div`
    overflow-y: hidden;
    overflow-x: auto;
    text-align: left;
    margin: 1.5rem 2rem 1rem 2rem;
    font-size: 2rem;
    color: ${props => props.theme.colors.cinzaSecundario};
`

export const DivLogoLoop = styled.div`
    margin-top: auto;
    padding-top: 16px;
    width: 100%;
    overflow: hidden;
`

export const Expandir = styled.div`
    transition: all 0.3s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.3rem;
    
    width: 100%;
    padding-right: 1.5rem;
    margin-top: 2.5rem; 

    font-size: 1.9rem;
    color: ${props => props.theme.colors.cinzaSecundario};

    img {
        width: 2.2rem;
        height: 2.2rem;
        object-fit: contain;
        transition: filter 0.3s ease-in-out;
    }
`