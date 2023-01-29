import { useContext } from 'react'
import { MainContext } from '../Main'
import produce from 'immer'
import styled from 'styled-components'

export const Personal = () => {
  const main = useContext(MainContext)

  return (
    <>
      <Heading>
        Personal Details
      </Heading>
      <form>
        <input
          onChange={e => main.setCV(produce(main.cv, draft => {
            draft.personal.firstName = e.target.value
          }))}
          placeholder='First name'
          type='text'
          value={main.cv.personal.firstName}
        />
        <input
          onChange={e => main.setCV(produce(main.cv, draft => {
            draft.personal.lastName = e.target.value
          }))}
          placeholder='Last name'
          type='text'
          value={main.cv.personal.lastName}
        />
        <input
          onChange={e => main.setCV(produce(main.cv, draft => {
            draft.personal.occupation = e.target.value
          }))}
          placeholder='Occupation'
          type='text'
          value={main.cv.personal.occupation}
        />
        <input
          onChange={e => main.setCV(produce(main.cv, draft => {
            draft.personal.email = e.target.value
          }))}
          placeholder='Email'
          type='text'
          value={main.cv.personal.email}
        />
        <input
          onChange={e => main.setCV(produce(main.cv, draft => {
            draft.personal.phoneNumber = e.target.value
          }))}
          placeholder='Phone number'
          type='text'
          value={main.cv.personal.phoneNumber}
        />
        <input
          onChange={e => main.setCV(produce(main.cv, draft => {
            draft.personal.location = e.target.value
          }))}
          placeholder='Location'
          type='text'
          value={main.cv.personal.location}
        />
      </form>
    </>
  )
}

const Heading = styled.h3`
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 1rem;
`