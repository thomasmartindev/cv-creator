import { Header } from './Header'
import { Sidebar } from './Sidebar'
import { Main } from './Main'
import styled from 'styled-components'
import React from 'react'

export const CV = React.forwardRef(({}, ref) => {
  return (
    <Container ref={ref}>
      <Wrapper>
        <Header />
        <Sidebar />
      </Wrapper>
      <Main />
    </Container>
  )
})

const Container = styled.div`
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  display: flex;
  height: 1123px;
  outline: 6px solid ${({ theme }) => theme.dark};
  position: sticky;
  top: 2rem;
  width: 794px;

  @media (max-width: 900px) {
    outline: 0.667vw solid ${({ theme }) => theme.dark};
    height: 124.778vw;
    width: 88.222vw;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
`