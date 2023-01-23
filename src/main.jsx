import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { GlobalStyle } from './theme/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import Theme from './theme/Theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)