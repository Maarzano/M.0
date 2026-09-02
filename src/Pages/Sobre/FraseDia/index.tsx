import ScrollReveal from "../../../components/ScrollReveal";
import Sessao from "../../../components/Sessao";
import { Citacao, Wrapper } from "./styles";

/*
 * Segunda seção — frame 16:11 do Figma. O título "Sobre mim" e o rótulo
 * "Minha frase do dia" não são desenhados aqui: o <Sessao> anuncia esses
 * rótulos e quem os desenha é o cabeçalho ancorado do palco fixo, que já está
 * travado no topo quando esta seção entra.
 */
const FraseDia = () => {
    return (
        <Sessao sessao="Sobre mim" subsessao="Minha frase do dia">
            <Wrapper>
                <Citacao>
                    {/* Essa frase virá de API, é apenas temporário */}
                    <ScrollReveal
                        fontSize="6.4rem"
                        showQuotes
                        wordAnimationStart="top 72%"
                        wordAnimationEnd="+=800"
                    >
                        Coding is the art of building worlds from logic, passion, and imagination.
                    </ScrollReveal>
                </Citacao>
            </Wrapper>
        </Sessao>
    )
}

export default FraseDia;
