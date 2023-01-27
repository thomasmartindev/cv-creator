import styled from 'styled-components'
import { useContext } from 'react'
import { MainContext } from '../Main'
import { MdEmail, MdLocationPin, MdPhone } from 'react-icons/md'
import { IconContext } from 'react-icons/lib'

export const Header = () => {
  const main = useContext(MainContext)

  return (
    <Container
      theme={main.theme}
    >
      <Name>
        {main.cv.personal.firstName}
      </Name>
      <Name>
        {main.cv.personal.lastName}
      </Name>
      <Occupation>
        {main.cv.personal.occupation}
      </Occupation>
      <IconContext.Provider
        value={{
          size: '15px'
        }}
      >
        <Wrapper>
          <MdEmail />
          <p>
            {main.cv.personal.email}
          </p>
        </Wrapper>
        <PhoneWrapper>
          <MdPhone />
          <p>
            {main.cv.personal.phoneNumber}
          </p>
        </PhoneWrapper>
        <Wrapper>
          <MdLocationPin />
          <p>
            {main.cv.personal.location}
          </p>
        </Wrapper>
      </IconContext.Provider>
    </Container>
  )
}

const Container = styled.div`
  background-color: ${({ theme }) => theme};
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
`

const Name = styled.h2`
  font-family: 'Roboto Slab';
  font-size: 3rem;
  font-weight: 400;
`

const Occupation = styled.h3`
  font-family: 'Roboto Slab';
  font-size: 2rem;
  font-style: italic;
  font-weight: 300;
  margin: 1rem 0 2.5rem;
`

const PhoneWrapper = styled.div`
  align-items: center;
  column-gap: 1rem;
  display: flex;
  font-size: 1.4rem;
  margin: 0.5rem 0;
`

const Wrapper = styled.div`
  align-items: center;
  column-gap: 1rem;
  display: flex;
  font-size: 1.4rem;
`