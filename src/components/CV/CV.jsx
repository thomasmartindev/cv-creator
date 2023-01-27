import { Header } from './Header'
import { Sidebar } from './Sidebar'
import { Main } from './Main'
import { IconContext } from 'react-icons/lib'
import Theme from '../../theme/Theme'

import styled from 'styled-components'

export const CV = () => {
  return (
    <Container>
      <IconContext.Provider
        value={{
          color: Theme.mid,
          size: '15px'
        }}
      >
        <Wrapper>
          <Header />
          <Sidebar />
        </Wrapper>
        <Main />
      </IconContext.Provider>
    </Container>
  )
}

const Container = styled.div`
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  display: flex;
  height: 1123px;
  outline: 6px solid ${({ theme }) => theme.dark};
  position: sticky;
  top: 2rem;
  width: 794px;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
`