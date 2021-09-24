import { Container as RawContainer } from 'styled-bootstrap-grid'
import styled from 'styled-components'

type BoxProps = {
  margin?: string
  padding?: string
}

export const Container = styled(RawContainer)``

export const Box = styled.div<BoxProps>`
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
`

export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const InlineInputGroup = styled.div`
  display: flex;

  input {
    margin-right: 8px;
  }

  button {
    border-radius: 4px;
  }
`
