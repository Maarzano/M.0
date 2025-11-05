import Lanyard from '../../../Components/Lanyard'
import Lanyard2 from '../../../Components/Lanyard2';
import ScrollIcon from "../../../components/ScrollIcon";
import { Separação, Wrapper } from "./styles";

const Index = () => {
    return (
        <>
        {/* <Lanyard /> */}
        <Lanyard2/>
        <Wrapper>
            <Separação>
                <h1>Teste</h1>
            </Separação>
            <Separação>
                <p>dasdasda</p>
            </Separação>
            <ScrollIcon/>
        </Wrapper>
        
        </>
    )
}

export default Index;