import { SummaryItem } from './SummaryItem'
import { useContext } from 'react'
import { MainContext } from '../Main'
import produce from 'immer'
import { v4 as uuidv4 } from 'uuid'
import styled from 'styled-components'
import { AddButton } from '../utilities/addButton'

export const ExperienceItem = ({ id }) => {
  const main = useContext(MainContext)

  const index = main.cv.experience.findIndex(item => item.id === id)

  const addSummaryItem = e => {
    e.preventDefault()

    main.setCV(produce(main.cv, draft => {
      draft.experience[index].summary.push({
        id: uuidv4(),
        text: ''
      })
    }))
  }

  const deleteSummaryItem = summaryIndex => {
    main.setCV(produce(main.cv, draft => {
      draft.experience[index].summary.splice(summaryIndex, 1)
    }))
  }

  const summaryItems = main.cv.experience[index].summary.map(item =>
    <SummaryItem
      deleteSummaryItem={deleteSummaryItem}
      id={item.id}
      index={index}
      key={item.id}
    />
  )

  return (
    <form>
      <input
        onChange={e => main.setCV(produce(main.cv, draft => {
          draft.experience[index].position = e.target.value
        }))}
        placeholder='Position'
        type='text'
        value={main.cv.experience[index].position}
      />
      <input
        onChange={e => main.setCV(produce(main.cv, draft => {
          draft.experience[index].company = e.target.value
        }))}
        placeholder='Company'
        type='text'
        value={main.cv.experience[index].company}
      />
      <input
        onChange={e => main.setCV(produce(main.cv, draft => {
          draft.experience[index].from = e.target.value
        }))}
        placeholder='From'
        type='text'
        value={main.cv.experience[index].from}
      />
      <input
        onChange={e => main.setCV(produce(main.cv, draft => {
          draft.experience[index].to = e.target.value
        }))}
        placeholder='To'
        type='text'
        value={main.cv.experience[index].to}
      />
      <input
        onChange={e => main.setCV(produce(main.cv, draft => {
          draft.experience[index].location = e.target.value
        }))}
        placeholder='Location'
        type='text'
        value={main.cv.experience[index].location}
      />
      <Summary>
        {summaryItems}
      </Summary>
      <AddButton 
        clickHandler={addSummaryItem}
      />
      <button
        onClick={() => main.deleteExperience(index)}
        type='button'
      >
        Delete Experience
      </button>
    </form>
  )
}

const Summary = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`