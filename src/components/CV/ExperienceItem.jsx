import styled from 'styled-components'
import { FaCalendarAlt } from 'react-icons/fa'
import { MdLocationPin } from 'react-icons/md'

export const ExperienceItem = ({
  company,
  from,
  location,
  position,
  summary,
  theme,
  to
}) => {
  const summaryItems = summary.map(item =>
    <SummaryItem
      key={item.id}
    >
      {item.text}
    </SummaryItem>
  )

  return (
    <Container>
      <Position>
        {position}
      </Position>
      <Company
        theme={theme}
      >
        {company}
      </Company>
      <Wrapper>
        <DurationWrapper>
          <FaCalendarAlt />
          <p>
            {from} - {to}
          </p>
        </DurationWrapper>
        <LocationWrapper>
          <MdLocationPin />
          <p>
            {location}
          </p>
        </LocationWrapper> 
      </Wrapper>
      <Summary>
        {summaryItems}
      </Summary>
    </Container>
  )
}

const Company = styled.p`
  color: ${({ theme }) => theme};
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5rem;
  row-gap: 0.5rem;
`

const DurationWrapper = styled.div`
  align-items: center;
  column-gap: 0.5rem;
  display: flex;
`

const LocationWrapper = styled.div`
  align-items: center;
  column-gap: 0.5rem;
  display: flex;
`

const Position = styled.p`
  font-size: 2rem;
`

const Summary = styled.ul`
  display: flex;
  flex-direction: column;
  line-height: 1.4;
  list-style: disc;
  list-style-position: outside;
  row-gap: 0.5rem;
`

const SummaryItem = styled.li`
  font-size: 1.4rem;
  margin-left: 3rem;
`

const Wrapper = styled.div`
  column-gap: 3rem;
  display: flex;
  font-size: 1.4rem;
`