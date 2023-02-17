import styled from 'styled-components'
import { FaGithub } from 'react-icons/fa'

export const Footer = () => {
  return (
    <Container>
      <p>
        thomasmartindev
      </p>
      <Link
        href='https://github.com/thomasmartindev'
        target='_blank'
      >
        <Github />
      </Link>
    </Container>
  )
}

const Container = styled.footer`
  align-items: center;
  background-color: ${({ theme }) => theme.dark};
  column-gap: 1rem;
  color: ${({ theme }) => theme.midLight};
  display: flex;
  font-size: 1.6rem;
  justify-content: center;
  margin-top: 10rem;
  padding: 1rem 0;
  width: 100%;

  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
`

const Github = styled(FaGithub)`
  color: ${({ theme }) => theme.midLight};
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover { 
    transform: rotate(360deg) scale(1.2);
  }
`

const Link = styled.a`
  align-items: center;
  display: flex;
  font-size: 2rem;
  text-decoration: none;

  @media (max-width: 600px) {
    font-size: 1.8rem;
  }
`