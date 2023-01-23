import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-family: 'Roboto', sans-serif;
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.background};
    font-size: 1.6rem;
  }

  h1 { font-size: 100%; }
`