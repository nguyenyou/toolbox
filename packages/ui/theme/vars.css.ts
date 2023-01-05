import { createThemeContract } from '@vanilla-extract/css'

export const vars = createThemeContract({
  color: {
    text: null,
    textLighter: null,
    link: null,
    linkHover: null,
    linkActive: null,
    border: null,
    line: null,
    background: null,
    primary: null,
    primaryLight: null,
    primaryDark: null,
    primaryBG: null,
    secondary: null,
    secondaryLight: null,
    secondaryDark: null,
    secondaryBG: null,
    neutral: null,
    neutralLight: null,
    neutralDark: null,
    neutralBG: null,
  }
})
