import CertificateList from "../../../components/Lists/CertificateList";
import Sessao from "../../../components/Sessao";
import { Wrapper } from "./styles";

const FormacaoCertificado = () => {
    return (
        <Sessao sessao="Sobre mim" subsessao="Formação e Certificados">
            <Wrapper>
                <CertificateList/>
            </Wrapper>
        </Sessao>
    );
}

export default FormacaoCertificado;
