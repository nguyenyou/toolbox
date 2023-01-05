import { vars } from '../vars.css'
import { createTheme } from '@vanilla-extract/css'
import { gray, blue, orange, red,yellow, green, teal, cyan, violet } from 'tailwindcss/colors'

const mainTheme = createTheme(vars, {
  color: {
    text: gray[900],
    textLighter: gray[400],
    link: blue[500],
    linkHover: blue[400],
    linkActive: blue[600],
    border: gray[200],
    line: gray[100],
    background: gray[100],
    primary: teal[500],
    primaryLight: teal[300],
    primaryDark: teal[400],
    primaryBG: teal[100],
    secondary: violet[500],
    secondaryLight: violet[400],
    secondaryDark: violet[500],
    secondaryBG: violet[100],
    neutral: gray[200],
    neutralLight: gray[100],
    neutralDark: gray[400],
    neutralBG: gray[50]
  }
})

export default mainTheme
