import styled, { css } from 'styled-components'

type StyledButtonProps = {
  buttonType: 'primary' | 'secondary' | 'text'
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  outline: none;
  padding: 0.75rem 1.5rem 1rem 1.5rem;
  font-size: 0.75rem;
  cursor: pointer;
  font-family: ${(props) => props.theme.fontFamilies.regular};

  ${(props) =>
    props.buttonType === 'primary' &&
    css`
      border-radius: 0.25rem;
      font-weight: 500;
      background-color: ${(props) => props.theme.colors.buttonSolid};
      border: 1px solid ${(props) => props.theme.colors.buttonBorder};
      color: ${(props) => props.theme.colors.white};

      &:disabled {
        cursor: not-allowed;
        opacity: 0.7;
      }

      &:active,
      &:hover {
        background-color: ${(props) => props.theme.colors.buttonHover1};
        transition-delay: 0.1s;
      }
    `}

  ${(props) =>
    props.buttonType === 'secondary' &&
    css`
      border-radius: 0.25rem;
      background-color: ${(props) => props.theme.colors.bgColor1};
      border: 1px solid ${(props) => props.theme.colors.buttonSolid};
      color: ${(props) => props.theme.colors.buttonSolid};

      &:disabled {
        cursor: not-allowed;
        opacity: 0.7;
      }

      &:active,
      &:hover {
        background-color: ${(props) => props.theme.colors.buttonHover2};
        transition-delay: 0.1s;
      }
    `}

  ${(props) =>
    props.buttonType === 'text' &&
    css`
      border-radius: 0.25rem;
      background-color: ${(props) => props.theme.colors.white};
      border: none;
      color: ${(props) => props.theme.colors.buttonSolid};

      &:disabled {
        cursor: not-allowed;
        opacity: 0.7;
      }

      &:active,
      &:hover {
        background-color: ${(props) => props.theme.colors.buttonHover2};
        transition-delay: 0.1s;
      }
    `}
`
