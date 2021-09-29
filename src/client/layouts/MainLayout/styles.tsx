import { media } from 'styled-bootstrap-grid'
import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 60px;

  ${media.xs`
    padding: 0px 20px;
  `}

  ${media.sm`
    padding: 0px 60px;
  `}

  ${media.md`
    padding: 0px 120px;
  `}

  ${media.lg`
    padding: 0px 195px;
  `}
`
