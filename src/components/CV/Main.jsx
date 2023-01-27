import { ExperienceItem } from './ExperienceItem'
import { useContext } from 'react'
import { MainContext } from '../Main'
import styled from 'styled-components'

export const Main = () => {
  const main = useContext(MainContext)

  const experienceItems = main.cv.experience.map(item => 
    <ExperienceItem
      company={item.company}
      from={item.from}
      key={item.id}
      location={item.location}
      position={item.position}
      summary={item.summary}
      theme={main.theme}
      to={item.to}
    />
  )

  return (
    <Container>
      <Heading>
        Work Experience
      </Heading>
      <ul>
        {experienceItems}
      </ul>
    </Container>
  )
}

const Container = styled.div`
  background-color: #FFFFFF;
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