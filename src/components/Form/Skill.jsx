import { useContext } from 'react'
import { MainContext } from '../Main'
import styled from 'styled-components'
import produce from 'immer'
import { DeleteButton } from '../utilities/deleteButton'

export const Skill = ({ id }) => {
  const main = useContext(MainContext)

  const index = main.cv.skills.findIndex(item => item.id === id)

  return (
    <Container>
      <input
        onChange={e => main.setCV(produce(main.cv, draft => {
          draft.skills[index].skill = e.target.value
        }))}
        placeholder={`${index + 1}.`}
        type='text'
        value={main.cv.skills[index].skill}
      />
      <DeleteButton
        clickHandler={() => main.deleteSkill(index)}
      />
    </Container>
  )
}

const Container = styled.div`
  align-items: center;
  column-gap: 1rem;
  display: flex;
  margin-bottom: 1rem;
`