import styled, { css } from 'styled-components'

type StyledButtonProps = {
  buttonType: 'primary' | 'secondary' | 'text'
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  outline: none;

  svg:last-of-type {
    margin-left: 5px;
    color: inherit;
  }

  ${(props) =>
    props.buttonType === 'primary' &&
    css`
      border-radius: 4px;
      background-color: ${(props) => props.theme.colors.primary1};
      color: ${(props) => props.theme.colors.white};

      &:disabled {
        cursor: not-allowed;
        opacity: 0.7;
      }

      &:active,
      &:hover {
        background-color: ${(props) => props.theme.colors.primaryDark};
      }
    `}

  ${(props) =>
    props.buttonType === 'secondary' &&
    css`
      border-radius: 50px;
      background-color: ${(props) => props.theme.colors.white};
      border: 1px solid ${(props) => props.theme.colors.primary1};
      color: ${(props) => props.theme.colors.primary1};

      &:disabled {
        cursor: not-allowed;
        opacity: 0.7;
      }
    `}

  ${(props) =>
    props.buttonType === 'text' &&
    css`
      background-color: ${(props) => props.theme.colors.white};
      color: ${(props) => props.theme.colors.primary1};
      padding: 0px;

      &:disabled {
        cursor: not-allowed;
        opacity: 0.7;
      }
    `}
`
