import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.textToB1};
    font-family: ${props => props.theme.fonts.main};
    -webkit-font-smoothing: antialiased;
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.heading};
    font-weight: bold;
  }

  h1 {
    font-size: 3.2rem;
    }

    h2 {
        font-size: 2.8rem;
    }

    h3 {
        font-size: 2.4rem;
    }

    button {
        cursor: pointer;
        border: none;
    }
`;