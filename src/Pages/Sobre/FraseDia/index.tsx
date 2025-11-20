import ScrollReveal from "../../../Components/ScrollReveal";
import { Wrapper } from "./styles";

const FraseDia = () => {
    return (
        <Wrapper>
            <div>
                <ScrollReveal fontSize="6.5rem">
                    {/*Essa frase virá de API, é apenas temporário */}
                    Coding is the art of building worlds from logic, passion, and imagination.
                </ScrollReveal>
            </div>
        </Wrapper>
    )
    

}

export default FraseDia;