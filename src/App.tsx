import styled, { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/theme"
import { GlobalStyle } from "./styles/GlobalStyle"

import Index from "./Pages/Sobre/Index/Index" 
import FraseDia from "./Pages/Sobre/FraseDia"
import Apresentação from "./Pages/Sobre/Apresentação"
import TargetCursor from "./components/TargetCursor"
import FormacaoCertificado from "./Pages/Sobre/FormaçãoCertificados"
import BarraNavegacao from "./layout/Navegacao/BarraNavegacao"
import { indicesData } from "./data/indices/indices"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TargetCursor spinDuration={2}
                    hideDefaultCursor={true}
                    parallaxOn={false}/>
      <Wrapper>
        <BarraNavegacao itens={indicesData}/>
        <Index/>
        <FraseDia/>
        <Apresentação/>
        <FormacaoCertificado/>
        <Temp/>
      </Wrapper>
    </ThemeProvider>
  )
}

const Wrapper = styled.div`
  width: 95vw;
  margin: 2rem auto 2rem auto;
`
const Temp = styled.div`
  width: 100%;
  height: 12rem;
`

export default App