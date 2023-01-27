import styled from 'styled-components'
import { FaGithub } from 'react-icons/fa'

export const Footer = () => {
  return (
    <Container>
      <p>
        thomasmdevelopment
      </p>
      <Link
        href='https://github.com/thomasmdevelopment'
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
  bottom: 0;
  column-gap: 1rem;
  color: ${({ theme }) => theme.midLight};
  display: flex;
  font-size: 1.6rem;
  font-weight: 400;
  justify-content: center;
  padding: 1rem 0;
  position: fixed;
  width: 100%;
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
`