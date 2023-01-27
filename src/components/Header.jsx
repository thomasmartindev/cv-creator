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
  max-width: 1800px;
  padding: 2rem 8rem;

  @media (max-width: 1600px) {
    justify-content: center;
  }
`