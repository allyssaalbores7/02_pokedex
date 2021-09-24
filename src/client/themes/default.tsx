/* eslint-disable no-magic-numbers */
import { rem, rgba } from 'polished'

const colors = {
  primary1: '#067EED',
  primary1_02: rgba('#28a5ff', 0.2),
  primaryDark: '#0E3854',

  secondary1: rgba('#85c3ff', 0.25),

  // dark
  darkLight20: '#5B5A5D',

  // gray
  gray1: '#333333',
  gray2: '#4F4F4F',
  gray3: '#828282',
  gray4: '#BDBDBD',
  gray5: '#E0E0E0',
  gray6: '#F2F2F2',
  gray7: '#EEEEEE',

  // green
  green1: '#219653',
  green2: '#27AE60',

  // red
  red1: '#EB5757',

  // extras
  bgColor: '#FAFCFF',
  black: '#000000',
  error: '#EB5757',
  white: '#FFFFFF',
  mastheadBorderColor: '#D6D6D7',

  discordPrimary: '#7289da',
}

const fontFamilies = {
  regular: "'TT Norms', sans-serif",
}

const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
}

const fontSizes = {
  h1: rem('87px'),
  h2: rem('67px'),
  h3: rem('50px'),
  h4: rem('38px'),
  h5: rem('24px'),
  h6: rem('18px'),
  body1: rem('16px'),
  body2: rem('14px'),
  body3: rem('12px'),
}

const shadows = {
  elevation1: '0px 2px 4px rgba(147, 156, 174, 0.24)',
  elevation2: '0px 4px 8px rgba(147, 156, 174, 0.24)',
  elevation3: '0px 8px 16px rgba(147, 156, 174, 0.24)',
}

const defaultTheme = {
  colors,
  fontFamilies,
  fontSizes,
  fontWeights,
  shadows,
}

export default defaultTheme
