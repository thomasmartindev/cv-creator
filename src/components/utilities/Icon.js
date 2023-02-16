import styled from 'styled-components'
import { MdEmail } from 'react-icons/md'

export const Icon = styled(MdEmail)`
  color: #FFFFFF;
  flex-shrink: 0;
  height: 15px;
  width: 15px;

  @media (max-width: 900px) {
    height: 1.667vw;
    width: 1.667vw;
  }
`