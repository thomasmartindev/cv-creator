import styled from 'styled-components'
import { FaCalendarAlt } from 'react-icons/fa'
import { MdLocationPin } from 'react-icons/md'
import { Icon } from '../utilities/Icon'
import { IconContext } from 'react-icons/lib'
import Theme from '../../theme/Theme'

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
      <IconContext.Provider
        value={{
          color: Theme.mid
        }}
      >
        <Wrapper>
          <Icon
            as={FaCalendarAlt}
          />
          <p>
            {from} - {to}
          </p>
        </Wrapper>
        <Wrapper>
          <Icon
            as={MdLocationPin}
          />
          <p>
            {location}
          </p>
        </Wrapper>
      </IconContext.Provider>
    </Container>
  )
}

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