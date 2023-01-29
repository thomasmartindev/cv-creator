import { Form } from './Form/Form'
import { CV } from './CV/CV'
import { createContext, useRef, useState } from 'react'
import styled from 'styled-components'
import { exampleCV } from './utilities/exampleCV'
import { emptyCV } from './utilities/emptyCV'
import Theme from '../theme/Theme'
import { useReactToPrint } from 'react-to-print'
import produce from 'immer'
import { v4 as uuidv4 } from 'uuid'

export const MainContext = createContext()

export const Main = () => {
  const [cv, setCV] = useState(emptyCV)
  const [theme, setTheme] = useState(Theme.green)

  const addExperience = () => {
    setCV(produce(cv, draft => {
      draft.experience.push({
        company: '',
        from: '',
        id: uuidv4(),
        location: '',
        position: '',
        summary: [
          {
            id: uuidv4(),
            text: ''
          }
        ],
        to: ''
      })
    }))
  }

  const addEducation = () => {
    setCV(produce(cv, draft => {
      draft.education.push({
        from: '',
        id: uuidv4(),
        institution: '',
        location: '',
        qualification: '',
        to: ''
      })
    }))
  }

  const addSkill = () => {
    setCV(produce(cv, draft => {
      draft.skills.push({
        id: uuidv4(),
        skill: ''
      })
    }))
  }

  const deleteExperience = index => {
    setCV(produce(cv, draft => {
      draft.experience.splice(index, 1)
    }))
  }

  const deleteEducation = index => {
    setCV(produce(cv, draft => {
      draft.education.splice(index, 1)
    }))
  }

  const deleteSkill = index => {
    setCV(produce(cv, draft => {
      draft.skills.splice(index, 1)
    }))
  }

  const componentRef = useRef()
  const generatePDF = useReactToPrint({
    content: () => componentRef.current
  })

  const loadExample = () => setCV(exampleCV)
  const resetCV = () => setCV(emptyCV)

  return (
    <Container>
      <MainContext.Provider
        value={{
          cv,
          deleteEducation,
          deleteExperience,
          deleteSkill,
          setCV,
          setTheme,
          theme
        }}
      >
        <Form
          addEducation={addEducation}
          addExperience={addExperience}
          addSkill={addSkill}
          generatePDF={generatePDF}
          loadExample={loadExample}
          resetCV={resetCV}
        />
        <CV
          ref={componentRef}
        />
      </MainContext.Provider>
    </Container>
  )
}

const Container = styled.main`
  column-gap: 8rem;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1600px;
  padding: 4rem 8rem;

  @media (max-width: 1400px) {
    align-items: center;
    flex-direction: column;
    row-gap: 4rem;
  }
`