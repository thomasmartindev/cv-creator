import styled from 'styled-components'

export const AddButton = ({ clickHandler }) => {
  return (
    <Button
      onClick={clickHandler}
    >
      +
    </Button>
  )
}

const Button = styled.p`
  color: ${({ theme }) => theme.dark};
  cursor: pointer;
  font-size: 2.5rem;
  font-weight: 500;
  margin: 0 auto;
  width: fit-content;

  &:hover {
    color: ${({ theme }) => theme.darkHover};
    transform: scale(1.2);
  }
`