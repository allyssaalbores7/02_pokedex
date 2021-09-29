import Textarea from 'react-autosize-textarea'
import styled, { css } from 'styled-components'

import Text from '../Text'

type StyledInputProps = {
  inputStyle: 'outline' | 'solid'
}

const commonStyle = css<StyledInputProps>`
  padding: 1rem 1.25rem;
  width: 100%;
  border-radius: 4px;
  font-family: ${(props) => props.theme.fontFamilies.regular};
  color: ${(props) => props.theme.colors.textPrimary};

  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.colors.buttonSolid};
  }

  ${(props) =>
    props.inputStyle === 'outline' &&
    css`
      background: ${(props) => props.theme.colors.white};
      border: 1px solid ${(props) => props.theme.colors.bgBorder};
    `}

  ${(props) =>
    props.inputStyle === 'solid' &&
    css`
      background: ${(props) => props.theme.colors.bgColor2};
      border: 1px solid ${(props) => props.theme.colors.bgBorder};
    `}
`

export const StyledInput = styled.input`
  ${commonStyle};
`

export const StyledTextarea = styled(Textarea)`
  ${commonStyle};
  resize: none;
`

export const TitleText = styled(Text)`
  text-transform: uppercase;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
