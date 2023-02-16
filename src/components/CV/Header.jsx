import styled from 'styled-components'
import { useContext } from 'react'
import { MainContext } from '../Main'
import { MdLocationPin, MdPhone } from 'react-icons/md'
import { Icon } from '../utilities/Icon' 

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
      <Wrapper>
        <Icon />
        <p>
          {main.cv.personal.email}
        </p>
      </Wrapper>
      <PhoneWrapper>
        <Icon
          as={MdPhone}
        />
        <p>
          {main.cv.personal.phoneNumber}
        </p>
      </PhoneWrapper>
      <Wrapper>
        <Icon
          as={MdLocationPin}
        />
        <p>
          {main.cv.personal.location}
        </p>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  background-color: ${({ theme }) => theme};
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  padding: 2.5rem;

  @media (max-width: 900px) {
    padding: 2.778vw;
  }
`

const Name = styled.h2`
  font-family: 'Roboto Slab';
  font-size: 3rem;
  font-weight: 400;

  @media (max-width: 900px) {
    font-size: 3.333vw;
  }
`

const Occupation = styled.h3`
  font-family: 'Roboto Slab';
  font-size: 2rem;
  font-style: italic;
  font-weight: 300;
  margin: 1rem 0 2.5rem;

  @media (max-width: 900px) {
    font-size: 2.222vw;
    margin: 1.111vw 0 2.778vw;
  }
`

const PhoneWrapper = styled.div`
  align-items: center;
  column-gap: 1rem;
  display: flex;
  font-size: 1.2rem;
  margin: 0.5rem 0;
  word-break: break-all;

  @media (max-width: 900px) {
    column-gap: 1.111vw;
    font-size: 1.333vw;
    margin: 0.556vw 0;
  }
`

const Wrapper = styled.div`
  align-items: center;
  column-gap: 1rem;
  display: flex;
  font-size: 1.2rem;
  word-break: break-all;

  @media (max-width: 900px) {
    column-gap: 1.111vw;
    font-size: 1.333vw;
  }
`