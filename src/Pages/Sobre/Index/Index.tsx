import Lanyard2 from '../../../components/Lanyard2';
import ScrollIcon from "../../../components/ScrollIcon";
import { LanyardWrapper, Wrapper } from "./styles";

/*
 * O nome, as redes, o M.0 e o trilho não estão aqui: eles vivem no palco fixo,
 * porque atravessam a página inteira e ancoram no topo. O data-hero é a régua
 * dessa ancoragem — é a altura desta seção que define a faixa de rolagem em
 * que a transição acontece.
 */
const Index = () => {
    return (
        <Wrapper data-hero>
            <LanyardWrapper>
                {/* fov 21 deixa o card ocupando ~46% da altura, como no Figma */}
                <Lanyard2 fov={21}/>
            </LanyardWrapper>
            <ScrollIcon/>
        </Wrapper>
    )
}

export default Index;
