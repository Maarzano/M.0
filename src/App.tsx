import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/theme"
import { GlobalStyle } from "./styles/GlobalStyle"

import Index from "./Pages/Sobre/Index/Index" 
import Linha from "./Components/Linha"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Linha/>
      <Index/>
    </ThemeProvider>
  )
}

export default App