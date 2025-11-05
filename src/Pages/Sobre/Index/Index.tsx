import Lanyard from '../../../Components/Lanyard'
import Lanyard2 from '../../../Components/Lanyard2';
import ScrollIcon from "../../../Components/ScrollIcon";
import { Separação, Wrapper, LanyardWrapper } from "./styles";

const Index = () => {
    return (
        <>
        
        <Wrapper>
            <Separação>
                <h1>TESTE</h1>
            </Separação>
            <Separação>
                <LanyardWrapper>
                    <Lanyard2/>
                </LanyardWrapper>
            </Separação>
            <ScrollIcon/>
        </Wrapper>
        
        </>
    )
}

export default Index;