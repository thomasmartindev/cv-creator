import styled from 'styled-components'
import produce from 'immer'
import { decode } from 'html-entities'
import { useContext } from 'react'
import { MainContext } from '../Main'
import { DeleteButton } from '../utilities/deleteButton'

export const SummaryItem = ({
  deleteSummaryItem,
  id,
  index
}) => {
  const main = useContext(MainContext)

  const summaryIndex = main.cv.experience[index].summary.findIndex(item => item.id === id)

  return (
    <Container>
      <textarea
        onChange={e => main.setCV(produce(main.cv, draft => {
          draft.experience[index].summary[summaryIndex].text = e.target.value
        }))}
        placeholder={decode('&#8226;')}
        type='text'
        value={main.cv.experience[index].summary[summaryIndex].text}
      />
      <DeleteButton
        clickHandler={() => deleteSummaryItem(summaryIndex)}
      />
    </Container>
  )
}

const Container = styled.div`
  align-items: center;
  column-gap: 1rem;
  display: flex;
`