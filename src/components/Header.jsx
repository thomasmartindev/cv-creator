import styled from 'styled-components'

export const Header = () => {
  return (
    <StyledContainer>
      <StyledWrapper>
        <h1>CV CREATOR</h1>
      </StyledWrapper>
    </StyledContainer>
  )
}

const StyledContainer = styled.header`
  background-color: ${({ theme }) => theme.dark};
`

const StyledWrapper = styled.div`
  color: ${({ theme }) => theme.light};
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