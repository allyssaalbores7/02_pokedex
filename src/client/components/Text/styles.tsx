import styled, { css } from 'styled-components'

type Props = {
  type?: string
}

export const StyledText = styled.p<Props>`
  margin: 0;
  padding: 0;
  font-family: ${(props) => props.theme.fontFamilies.regular};
  color: ${(props) => props.theme.colors.textPrimary};

  ${(props) =>
    props.type === 'h1' &&
    css`
      font-weight: ${(props) => props.theme.fontWeights.medium};
      font-size: ${(props) => props.theme.fontSizes.h1};
    `}

  ${(props) =>
    props.type === 'h2' &&
    css`
      font-weight: ${(props) => props.theme.fontWeights.medium};
      font-size: ${(props) => props.theme.fontSizes.h2};
    `}

  ${(props) =>
    props.type === 'h3' &&
    css`
      font-weight: ${(props) => props.theme.fontWeights.medium};
      font-size: ${(props) => props.theme.fontSizes.h3};
    `}

  ${(props) =>
    props.type === 'h4' &&
    css`
      font-weight: ${(props) => props.theme.fontWeights.medium};
      font-size: ${(props) => props.theme.fontSizes.h4};
    `}

  ${(props) =>
    props.type === 'h5' &&
    css`
      font-weight: ${(props) => props.theme.fontWeights.medium};
      font-size: ${(props) => props.theme.fontSizes.h5};
    `}

  ${(props) =>
    props.type === 'h6' &&
    css`
      font-weight: ${(props) => props.theme.fontWeights.medium};
      font-size: ${(props) => props.theme.fontSizes.h6};
    `}

  ${(props) =>
    props.type === 'body1-regular' &&
    css`
      font-weight: ${(props) => props.theme.fontWeights.regular};
      font-size: ${(props) => props.theme.fontSizes.body1};
    `}

  ${(props) =>
    props.type === 'body1-medium' &&
    css`
      font-weight: ${(props) => props.theme.fontWeights.medium};
      font-size: ${(props) => props.theme.fontSizes.body1};
    `}

  ${(props) =>
    props.type === 'body1-bold' &&
    css`
      font-weight: ${(props) => props.theme.fontWeights.bold};
      font-size: ${(props) => props.theme.fontSizes.body1};
    `}

  ${(props) =>
    props.type === 'body2-regular' &&
    css`
      font-weight: ${(props) => props.theme.fontWeights.regular};
      font-size: ${(props) => props.theme.fontSizes.body2};
    `}

  ${(props) =>
    props.type === 'body2-medium' &&
    css`
      font-weight: ${(props) => props.theme.fontWeights.medium};
      font-size: ${(props) => props.theme.fontSizes.body2};
    `}

  ${(props) =>
    props.type === 'body2-bold' &&
    css`
      font-weight: ${(props) => props.theme.fontWeights.bold};
      font-size: ${(props) => props.theme.fontSizes.body2};
    `}

  ${(props) =>
    props.type === 'body3-regular' &&
    css`
      font-weight: ${(props) => props.theme.fontWeights.regular};
      font-size: ${(props) => props.theme.fontSizes.body3};
    `}

  ${(props) =>
    props.type === 'body3-medium' &&
    css`
      font-weight: ${(props) => props.theme.fontWeights.medium};
      font-size: ${(props) => props.theme.fontSizes.body3};
    `}

  ${(props) =>
    props.type === 'body3-bold' &&
    css`
      font-weight: ${(props) => props.theme.fontWeights.bold};
      font-size: ${(props) => props.theme.fontSizes.body3};
    `}
`
