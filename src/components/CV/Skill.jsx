import styled from 'styled-components'

export const Skill = ({ skill }) => {
  return (
    <LI>
      {skill}
    </LI>
  )
}

const LI = styled.li`
  font-size: 1.4rem;
  list-style: none;

  @media (max-width: 900px) {
    font-size: 1.556vw;
  }
`