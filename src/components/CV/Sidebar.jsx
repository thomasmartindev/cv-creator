import { EducationItem } from './EducationItem'
import { Skill } from './Skill'
import { useContext } from 'react'
import { MainContext } from '../Main'
import styled from 'styled-components'

export const Sidebar = () => {
  const main = useContext(MainContext)

  const educationItems = main.cv.education.map(item =>
    <EducationItem
      from={item.from}
      institution={item.institution}
      key={item.id}
      location={item.location}
      qualification={item.qualification}
      theme={main.theme}
      to={item.to}
    />
  )

  const skills = main.cv.skills.map(item => 
    <Skill 
      key={item.id}
      skill={item.skill}
    />
  )

  return (
    <Container>
      <Heading>
        Education
      </Heading>
      <ul>
        {educationItems}
      </ul>
      <Heading>
        Skills
      </Heading>
      <Skills>
        {skills}
      </Skills>
    </Container>
  )
}

const Container = styled.div`
  background-color: ${({ theme }) => theme.light};
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 2.5rem;
`

const Heading = styled.h3`
  font-family: 'Roboto Slab';
  font-size: 2.2rem;
  font-weight: 500;
  margin-bottom: 1rem;
`

const Skills = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`