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
import PalcoFixo from "./layout/PalcoFixo"
import Abertura from "./components/Abertura"
import ProvedorSessaoAtiva from "./contexts/ProvedorSessaoAtiva"
import { ID_CONTEUDO, ID_ENVOLTORIO, useRolagemSuave } from "./hooks/useRolagemSuave"

function App() {
  useRolagemSuave()

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <ProvedorSessaoAtiva>
        {/*
          Tudo que é position: fixed mora aqui fora, antes do envoltório: o
          conteúdo do ScrollSmoother é transformado, e lá dentro fixed passaria
          a valer em relação a ele em vez da viewport.
        */}
        <Abertura />
        <TargetCursor spinDuration={2}
                      hideDefaultCursor={true}
                      parallaxOn={false}/>
        <PalcoFixo />
        <BarraNavegacao itens={indicesData}/>

        <Envoltorio id={ID_ENVOLTORIO}>
          <Conteudo id={ID_CONTEUDO}>
            <Wrapper>
              <Index/>
              <FraseDia/>
              <Apresentação/>
              <FormacaoCertificado/>
              <Temp/>
            </Wrapper>
          </Conteudo>
        </Envoltorio>
      </ProvedorSessaoAtiva>
    </ThemeProvider>
  )
}

/*
 * Os dois <div> que o ScrollSmoother exige. Ficam sem estilo de propósito: é
 * ele que aplica o que precisa (envoltório fixo com overflow hidden, conteúdo
 * transladado). Sem o smoother — prefers-reduced-motion — sobram dois
 * invólucros neutros e a página rola nativa.
 */
const Envoltorio = styled.div``
const Conteudo = styled.div``

const Wrapper = styled.div`
  width: 95vw;
  margin: 2rem auto 2rem auto;
  /* O palco fixo repete esta mesma caixa para ancorar a coluna da esquerda no
     mesmo pixel. Mexer na largura daqui pede a mesma mudança lá. */
  position: relative;
`
const Temp = styled.div`
  width: 100%;
  height: 12rem;
`

export default App
