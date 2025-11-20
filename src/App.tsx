import styled, { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/theme"
import { GlobalStyle } from "./styles/GlobalStyle"

import Index from "./Pages/Sobre/Index/Index" 
import FraseDia from "./Pages/Sobre/FraseDia"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Wrapper>
        <Index/>
        <FraseDia/>
      </Wrapper>
    </ThemeProvider>
  )
}

export const Wrapper = styled.div`
  width: 95vw;
  margin: auto;
`

export default App