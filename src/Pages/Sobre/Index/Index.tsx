import Lanyard2 from '../../../Components/Lanyard2';
import ScrollIcon from "../../../components/ScrollIcon";
import { LanyardWrapper, Logo, Wrapper } from "./styles";

const Index = () => {
    return (
        <Wrapper>
            <Logo>M.0</Logo>
            <LanyardWrapper>
                {/* fov 21 deixa o card ocupando ~46% da altura, como no Figma */}
                <Lanyard2 fov={21}/>
            </LanyardWrapper>
            <ScrollIcon/>
        </Wrapper>
    )
}

export default Index;
