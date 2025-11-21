import ScrollReveal from "../../../components/ScrollReveal";
import { Wrapper } from "./styles";

const FraseDia = () => {
    return (
        <Wrapper>
            <div>
                <ScrollReveal fontSize="6rem">
                    {/*Essa frase virá de API, é apenas temporário */}
                    Coding is the art of building worlds from logic, passion, and imagination.
                </ScrollReveal>
            </div>
        </Wrapper>
    )
    

}

export default FraseDia;