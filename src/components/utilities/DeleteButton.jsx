import styled from 'styled-components'

export const DeleteButton = ({ clickHandler }) => {
  return (
    <Button
      onClick={clickHandler}
    >
      x
    </Button>
  )
}

const Button = styled.p`
  color: ${({ theme }) => theme.red};
  cursor: pointer;
  font-family: 'Comfortaa';
  font-size: 2.5rem;
  font-weight: 700;

  &:hover {
    color: #FF0000;
    transform: scale(1.1);
  }
`