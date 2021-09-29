/* eslint-disable no-magic-numbers */
import { rem, rgba } from 'polished'

const colors = {
  // buttons
  buttonSolid: '#af4417',
  buttonHover1: rgba('#af4417', 0.9),
  buttonHover2: rgba('#af4417', 0.2),
  buttonBorder: '#fb7823',

  // backgrounds
  bgColor1: '#f7fafc',
  bgColor2: '#edf2f6',
  bgBorder: '#e1e4e8',

  // texts
  textPrimary: '#2d3748',
  textSecondary: '#586069',

  error: '#e60013',
  white: '#ffffff',
}

const fontFamilies = {
  regular: "'Pokedex', sans-serif",
  sourceSans: "'Source Sans Pro', sans-serif",
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

const gaps = {
  gap1: 'rem(12px)',
  gap2: 'rem(16px)',
  gap3: 'rem(24px)',
}

const defaultTheme = {
  colors,
  fontFamilies,
  fontSizes,
  fontWeights,
  shadows,
  gaps,
}

export default defaultTheme
