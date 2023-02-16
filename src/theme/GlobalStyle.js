import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    overflow-wrap: break-word;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.background};
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
  }

  h1 {
    font-size: 100%;
  }

  button {
    background-color: ${({ theme }) => theme.dark};
    border: none;
    border-radius: 5px;
    color: ${({ theme }) => theme.midLight};
    cursor: pointer;
    font-family: 'Roboto';
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1rem 0;
    width: 100%;

    @media (max-width: 600px) {
      font-size: 1.4rem;
      padding: 0.8rem 0;
    }
  }
  
  button:hover {
    background-color: ${({ theme }) => theme.darkHover};
  }

  form {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    row-gap: 1rem;
  }

  input,
  textarea {
    border: none;
    border-radius: 5px;
    font-family: 'Roboto';
    font-size: 1.6rem;
    outline: none;
    padding: 1rem;
    width: 100%;

    @media (max-width: 600px) {
      font-size: 1.4rem;
      padding: 0.8rem;
    }
  }

  textarea {
    height: 80px;
    resize: none;

    @media (max-width: 600px) {
      height: 120px;
    }
  }
`