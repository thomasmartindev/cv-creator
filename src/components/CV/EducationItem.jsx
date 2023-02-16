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
      <Qualification>
        {qualification}
      </Qualification>
      <Institution
        theme={theme}
      >
        {institution}
      </Institution>
      <Wrapper>
        <CalendarIcon />
        <p>
          {from} - {to}
        </p>
      </Wrapper>
      <Wrapper>
        <LocationIcon />
        <p>
          {location}
        </p>
      </Wrapper>
    </Container>
  )
}

const CalendarIcon = styled(FaCalendarAlt)`
  flex-shrink: 0;
  height: 15px;
  width: 15px;

  @media (max-width: 900px) {
    height: 1.667vw;
    width: 1.667vw;
  }
`

const Container = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5rem;
  row-gap: 0.5rem;

  @media (max-width: 900px) {
    margin-bottom: 2.778vw;
    row-gap: 0.556vw;
  }
`

const Institution = styled.p`
  color: ${({ theme }) => theme};
  font-size: 1.6rem;

  @media (max-width: 900px) {
    font-size: 1.778vw;
  }
`

const LocationIcon = styled(MdLocationPin)`
  flex-shrink: 0;
  height: 15px;
  width: 15px;

  @media (max-width: 900px) {
    height: 1.667vw;
    width: 1.667vw;
  }
`

const Qualification = styled.p`
  font-size: 1.6rem;

  @media (max-width: 900px) {
    font-size: 1.778vw;
  }
`

const Wrapper = styled.div`
  align-items: center;
  column-gap: 1rem;
  display: flex;
  font-size: 1.4rem;

  @media (max-width: 900px) {
    column-gap: 1.111vw;
    font-size: 1.556vw;
  }
`