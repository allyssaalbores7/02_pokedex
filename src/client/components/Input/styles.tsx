import Textarea from 'react-autosize-textarea'
import styled, { css } from 'styled-components'

const commonStyle = css`
  padding: 12px 16px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors.gray5};

  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.colors.primary1};
  }
`

export const StyledInput = styled.input`
  ${commonStyle};
`

export const StyledTextarea = styled(Textarea)`
  ${commonStyle};
  resize: none;
`
