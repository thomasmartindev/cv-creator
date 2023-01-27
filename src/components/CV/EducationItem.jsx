import styled from 'styled-components'
import { FaCalendarAlt } from 'react-icons/fa'
import { MdLocationPin } from 'react-icons/md'

export const EducationItem = ({
  from,
  institution,
  location,
  qualification,
  to,
  theme
}) => {
  return (
    <Container>
      <p>
        {qualification}
      </p>
      <Institution
        theme={theme}
      >
        {institution}
      </Institution>
      <Wrapper>
        <FaCalendarAlt />
        <p>
          {from} - {to}
        </p>
      </Wrapper>
      <Wrapper>
        <MdLocationPin />
        <p>
          {location}
        </p>
      </Wrapper>
    </Container>
  )
}

const Container = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5rem;
  row-gap: 0.5rem;
`

const Institution = styled.p`
  color: ${({ theme }) => theme};
`

const Wrapper = styled.div`
  align-items: center;
  column-gap: 1rem;
  display: flex;
  font-size: 1.4rem;
`