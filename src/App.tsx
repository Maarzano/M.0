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
import Linha from "./components/Linha"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TargetCursor spinDuration={2}
                    hideDefaultCursor={true}
                    parallaxOn={false}/>
      <Wrapper>
        <BarraNavegacao itens={indicesData}/>
        {/* Fora do hero de propósito: o trilho desce até o fim do documento,
            atravessando todas as seções, e só o Wrapper tem essa altura. */}
        <Linha/>
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
  /* Bloco de contenção da Linha: é o único elemento com a altura de todas as
     seções somadas, então é ele que faz o trilho chegar ao fim da página. */
  position: relative;
`
const Temp = styled.div`
  width: 100%;
  height: 12rem;
`

export default App
