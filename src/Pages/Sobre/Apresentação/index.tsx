import ScrollReveal from "../../../components/ScrollReveal";
import Sessao from "../../../components/Sessao";
import { Texto, Wrapper } from "./styles";

const Apresentação = () => {
    return (
        <Sessao sessao="Sobre mim" subsessao="Apresentação">
            <Wrapper>
                <Texto>
                    {/*
                      A faixa de preenchimento vai do topo da seção até ela sair
                      inteira por cima: dá quase o dobro de rolagem do padrão do
                      ScrollReveal, que enchia o parágrafo em menos de uma tela.
                    */}
                    <ScrollReveal
                        fontSize="3.6rem"
                        textAlign="center"
                        wordAnimationStart="top 70%"
                        wordAnimationEnd="bottom top"
                    >
                        Olá! Sou Arthur Marzano, desenvolvedor Full-Stack apaixonado por construir aplicações escaláveis e eficientes, com atenção a Clean Code, testes automatizados e boas práticas. Tenho facilidade para aprender novas tecnologias rapidamente e meu objetivo é desenvolver softwares que resolvam problemas reais e impactem positivamente negócios e usuários.
                    </ScrollReveal>
                </Texto>
            </Wrapper>
        </Sessao>
    )
}
export default Apresentação;
