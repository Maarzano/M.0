import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/theme"
import { GlobalStyle } from "./styles/GlobalStyle"

import Index from "./Pages/Sobre/Index/Index" 

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Index/>
    </ThemeProvider>
  )
}

export default App