import { useContext } from 'react'
import { MainContext } from '../Main'
import produce from 'immer'

export const EducationItem = ({ id }) => {
  const main = useContext(MainContext)

  const index = main.cv.education.findIndex(item => item.id === id)

  return (
    <form>
      <input
        onChange={e => main.setCV(produce(main.cv, draft => {
          draft.education[index].qualification = e.target.value
        }))}
        placeholder='Qualification'
        type='text'
        value={main.cv.education[index].qualification}
      />
      <input
        onChange={e => main.setCV(produce(main.cv, draft => {
          draft.education[index].institution = e.target.value
        }))}
        placeholder='Company'
        type='text'
        value={main.cv.education[index].institution}
      />
      <input
        onChange={e => main.setCV(produce(main.cv, draft => {
          draft.education[index].from = e.target.value
        }))}
        placeholder='From'
        type='text'
        value={main.cv.education[index].from}
      />
      <input
        onChange={e => main.setCV(produce(main.cv, draft => {
          draft.education[index].to = e.target.value
        }))}
        placeholder='To'
        type='text'
        value={main.cv.education[index].to}
      />
      <input
        onChange={e => main.setCV(produce(main.cv, draft => {
          draft.education[index].location = e.target.value
        }))}
        placeholder='Location'
        type='text'
        value={main.cv.education[index].location}
      />
      <button
        onClick={() => main.deleteEducation(index)}
        type='button'
      >
        Delete Education
      </button>
    </form>
  )
}