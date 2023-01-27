import { CV } from './CV/CV'
import { createContext, useState } from 'react'
import styled from 'styled-components'
import { emptyCV } from './utilities/emptyCV'
import Theme from '../theme/Theme'

export const MainContext = createContext()

export const Main = () => {
  const [cv, setCV] = useState(emptyCV)
  const [theme, setTheme] = useState(Theme.green)

  return (
    <Container>
      <MainContext.Provider
        value={{
          cv,
          theme
        }}
      >
        <CV />
      </MainContext.Provider>
    </Container>
  )
}

const Container = styled.main`
  column-gap: 8rem;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1800px;
  padding: 4rem 8rem;

  @media (max-width: 1600px) {
    align-items: center;
    flex-direction: column;
    row-gap: 4rem;
  }
`