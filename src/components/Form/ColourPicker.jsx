import { useContext } from 'react'
import { MainContext } from '../Main'
import styled from 'styled-components'

export const ColourPicker = () => {
  const main = useContext(MainContext)
  
  return (
    <Input
      onChange={e => main.setTheme(e.target.value)}
      type='color'
      value={main.theme}
    />
  )
}

const Input = styled.input`
  appearance: none;
  background: none;
  border: none;
  cursor: pointer;
  height: 80px;
  padding: 0;
  outline: none;
  -webkit-appearance: none;
  width: 80px;

  &::-webkit-color-swatch {
    border: none;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  
  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 600px) {
    height: 60px;
    width: 60px;
  }
`