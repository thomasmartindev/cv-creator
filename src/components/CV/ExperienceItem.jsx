import styled from 'styled-components'
import { FaCalendarAlt } from 'react-icons/fa'
import { MdLocationPin } from 'react-icons/md'
import { Icon } from '../utilities/Icon'
import { IconContext } from 'react-icons/lib'
import Theme from '../../theme/Theme'

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
        <IconContext.Provider
          value={{
            color: Theme.mid
          }}
        >
          <DurationWrapper>
            <Icon
              as={FaCalendarAlt}
            />
            <p>
              {from} - {to}
            </p>
          </DurationWrapper>
          <LocationWrapper>
            <Icon
              as={MdLocationPin}
            />
            <p>
              {location}
            </p>
          </LocationWrapper>
        </IconContext.Provider>
      </Wrapper>
      <Summary>
        {summaryItems}
      </Summary>
    </Container>
  )
}

const Company = styled.p`
  color: ${({ theme }) => theme};
  font-size: 1.6rem;

  @media (max-width: 900px) {
    font-size: 1.778vw;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5rem;
  row-gap: 0.5rem;

  @media (max-width: 900px) {
    margin-bottom: 2.778vw;
    row-gap: 0.556vw;
  }
`

const DurationWrapper = styled.div`
  align-items: center;
  column-gap: 0.5rem;
  display: flex;

  @media (max-width: 900px) {
    column-gap: 0.556vw;
  }
`

const LocationWrapper = styled.div`
  align-items: center;
  column-gap: 0.5rem;
  display: flex;

  @media (max-width: 900px) {
    column-gap: 0.556vw;
  }
`

const Position = styled.p`
  font-size: 2rem;

  @media (max-width: 900px) {
    font-size: 2.222vw;
  }
`

const Summary = styled.ul`
  display: flex;
  flex-direction: column;
  line-height: 1.4;
  list-style: disc;
  list-style-position: outside;
  row-gap: 0.5rem;

  @media (max-width: 900px) {
    row-gap: 0.556vw;
  }
`

const SummaryItem = styled.li`
  font-size: 1.4rem;
  margin-left: 3rem;

  @media (max-width: 900px) {
    font-size: 1.556vw;
    margin-left: 3.333vw;
  }
`

const Wrapper = styled.div`
  column-gap: 3rem;
  display: flex;
  font-size: 1.4rem;

  @media (max-width: 900px) {
    column-gap: 3.333vw;
    font-size: 1.556vw;
  }
`