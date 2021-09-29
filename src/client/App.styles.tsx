import { createGlobalStyle } from 'styled-components'

import defaultTheme from './themes/default'

type DefaultThemeProps = typeof defaultTheme

type ThemeProps = {
  theme: DefaultThemeProps
}

export default createGlobalStyle<ThemeProps>`
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    transition: all 0.2s ease-in-out;
  }

  html {
    box-sizing: border-box;
    font-family: ${(props) => props.theme.fontFamilies.regular};
  }

  body {
    margin: 0;
    background-color: ${(props) => props.theme.colors.bgColor1};
    font-family: ${(props) => props.theme.fontFamilies.regular};
    font-size: ${(props) => props.theme.fontSizes.body1};
  }

  main {
    display: block;
  }

  #root {
    height: 100vh;
  }

  h1 {
    margin: 0 0 0.67em;
    font-size: ${(props) => props.theme.fontSizes.h1};
    font-weight: ${(props) => props.theme.fontWeights.medium};
  }

  h2 {
    font-size: ${(props) => props.theme.fontSizes.h2};
  }

  h3 {
    font-size: ${(props) => props.theme.fontSizes.h3};
  }

  h4 {
    font-size: ${(props) => props.theme.fontSizes.h4};
  }

  hr {
    height: 0;
    box-sizing: content-box;
    overflow: visible;
  }

  pre {
    font-family: monospace;
    font-size: 1em;
  }

  p {
    margin-top: 0;
    color: ${(props) => props.theme.colors.textPrimary};
    line-height: 1.2;
  }

  a {
    color: ${(props) => props.theme.colors.textPrimary};
    background-color: transparent;
    line-height: 24px;
    text-decoration: none;
  }

  label {
    font-size: ${(props) => props.theme.fontSizes.body1};
    font-weight: ${(props) => props.theme.fontWeights.medium};
    line-height: 24px;
  }

  a:visited {
    text-decoration: none;
  }

  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }

  b,
  strong {
    font-weight: bolder;
  }

  code,
  kbd,
  samp {
    font-family: monospace;
    font-size: 1em;
  }

  small {
    font-size: ${(props) => props.theme.fontSizes.body3};
    font-weight: ${(props) => props.theme.fontWeights.medium};
  }

  sub,
  sup {
    position: relative;
    font-size: 75%;
    line-height: 0;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  img {
    border-style: none;
  }

  button {
    padding: 8px 24px;
    background-color: transparent;
    border: 0;
    font-size: ${(props) => props.theme.fontSizes.body1};
    font-weight: ${(props) => props.theme.fontWeights.medium};
    text-align: center;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    margin: 0;
    font-family: inherit;
    font-size: 100%;
    transition: all 0.1s ease-in-out;
  }

  button,
  input {
    overflow: visible;
  }

  textarea {
    overflow: auto;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    cursor: pointer;
  }

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    padding: 0;
    border-style: none;
  }

  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  button:focus:active {
    position: relative;
    top: 1px;
  }

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  legend {
    display: table;
    padding: 0; /* 3 */
    max-width: 100%;
    box-sizing: border-box;
    color: inherit;
    white-space: normal;
  }

  progress {
    vertical-align: baseline;
  }


  [type="checkbox"],
  [type="radio"] {
    padding: 0;
    box-sizing: border-box;
  }

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  [type="search"] {
    outline-offset: -2px;
  }

  ::-webkit-file-upload-button {
    font: inherit;
  }

  details {
    display: block;
  }

  summary {
    display: list-item;
  }

  template {
    display: none;
  }

  [hidden] {
    display: none;
  }
`
