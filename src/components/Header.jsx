import styled from 'styled-components'

export const Header = () => {
  return (
    <Container>
      <Wrapper>
        <h1>
          CV CREATOR
        </h1>
      </Wrapper>
    </Container>
  )
}

const Container = styled.header`
  background-color: ${({ theme }) => theme.dark};
`

const Wrapper = styled.div`
  color: ${({ theme }) => theme.midLight};
  display: flex;
  font-size: 5rem;
  font-weight: 700;
  margin: 0 auto;
  max-width: 1600px;
  padding: 2rem 8rem;

  @media (max-width: 1400px) {
    justify-content: center;
  }

  @media (max-width: 600px) {
    font-size: 4rem;
    padding: 1.5rem 8rem;
  }

  @media (max-width: 400px) {
    font-size: 3.5rem;
    padding: 1.25rem 5rem;
  }
`