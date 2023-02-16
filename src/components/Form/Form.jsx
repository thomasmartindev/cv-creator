import { Personal } from './Personal'
import { ExperienceItem } from './ExperienceItem'
import { EducationItem } from './EducationItem'
import { Skill } from './Skill'
import { ColourPicker } from './ColourPicker'
import styled from 'styled-components'
import { useContext } from 'react'
import { MainContext } from '../Main'
import { AddButton } from '../utilities/addButton'

export const Form = ({
  addEducation,
  addExperience,
  addSkill,
  generatePDF,
  loadExample,
  resetCV
}) => {
  const main = useContext(MainContext)

  const experienceItems = main.cv.experience.map(item => 
    <ExperienceItem
      id={item.id}
      key={item.id}
    />
  )

  const educationItems = main.cv.education.map(item => 
    <EducationItem
      id={item.id}
      key={item.id}
    />
  )

  const skills = main.cv.skills.map(item => 
    <Skill
      id={item.id}
      key={item.id}
    />
  )

  return (
    <Container>
      <Personal />
      <Heading>
        Experience
      </Heading>
      <ul>
        {experienceItems}
      </ul>
      <button
        onClick={addExperience}
      >
        Add Experience
      </button>
      <Heading>
        Education
      </Heading>
      <ul>
        {educationItems}
      </ul>
      <button
        onClick={addEducation}
      >
        Add Education
      </button>
      <Heading>
        Skills
      </Heading>
      <ul>
        {skills}
      </ul>
      <AddButton
        clickHandler={addSkill}
      />
      <Wrapper>
        <ButtonWrapper>
          <button 
            onClick={generatePDF}
          >
            Generate PDF
          </button>
          <button
            onClick={loadExample}
          >
            Load Example
          </button>
          <button 
            onClick={resetCV}
          >
            Reset
          </button>
        </ButtonWrapper>
        <ThemeWrapper>
          <ThemeHeading>
            Change CV Theme
          </ThemeHeading>
          <ColourPicker />
        </ThemeWrapper>
      </Wrapper>
    </Container>
  )
}

const ButtonWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  row-gap: 1rem;
`

const Container = styled.div`
  background-color: ${({ theme }) => theme.midLight};
  border-radius: 5px;
  box-shadow: 0 7px 15px 0 rgba(0, 0, 0, .13),
              0 1px 4px 0 rgba(0, 0, 0, .11);
  flex: 1;
  padding: 2rem;
  width: 794px;

  @media (max-width: 900px) {
    width: 88.222vw;
  }

  @media (max-width: 600px) {
    padding: 1.5rem;
  }
`

const Heading = styled.h3`
  font-size: 1.8rem;
  font-weight: 500;
  margin: 4rem 0 1rem;

  @media (max-width: 600px) {
    font-size: 1.6rem;
  }
`

const ThemeHeading = styled.h3`
  font-size: 1.8rem;
  font-weight: 500;

  @media (max-width: 600px) {
    font-size: 1.6rem;
    margin-top: 1rem;
  }
`

const ThemeWrapper = styled.div`
  align-items: center;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`

const Wrapper = styled.div`
  align-items: center;
  column-gap: 5rem;
  display: flex;
  margin-top: 3rem;

  @media (max-width: 400px) {
    column-gap: 2.5rem;
  }
`