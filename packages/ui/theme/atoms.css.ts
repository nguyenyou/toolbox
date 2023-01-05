import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles'
import { vars } from './vars.css'
import { red, blue, green, } from 'tailwindcss/colors'
import { spacing, borderRadius } from 'tailwindcss/defaultTheme'

const colors = {
  primary: vars.color.primary,
  secondary: vars.color.secondary,
  white: 'white',
  black: 'black',
  'red-50': red[50],
  'red-100': red[100],
  'red-200': red[200],
  'red-300': red[300],
  'red-400': red[400],
  'red-500': red[500],
  'red-600': red[600],
  'red-700': red[700],
  'red-800': red[800],
  'red-900': red[900],
  'blue-50': blue[50],
  'blue-100': blue[100],
  'blue-200': blue[200],
  'blue-300': blue[300],
  'blue-400': blue[400],
  'blue-500': blue[500],
  'blue-600': blue[600],
  'blue-700': blue[700],
  'blue-800': blue[800],
  'blue-900': blue[900],
  'green-50': green[50],
  'green-100': green[100],
  'green-200': green[200],
  'green-300': green[300],
  'green-400': green[400],
  'green-500': green[500],
  'green-600': green[600],
  'green-700': green[700],
  'green-800': green[800],
  'green-900': green[900],
}



const space = {
  '0': spacing[0],
  '0.5': spacing['0.5'],
  '1': spacing[1],
  '1.5': spacing['1.5'],
  '2': spacing[2],
  '2.5': spacing['2.5'],
  '3': spacing[3],
  '3.5': spacing['3.5'],
  '4': spacing[4],
  '5': spacing[5],
  '6': spacing[6],
  '7': spacing[7],
  '8': spacing[8],
  '9': spacing[9],
  '10': spacing[10],
  '11': spacing[11],
  '12': spacing[12],
  '14': spacing[14],
  '16': spacing[16],
  '20': spacing[20],
  '24': spacing[24],
  '28': spacing[28],
  '32': spacing[32],
  '36': spacing[36],
  '40': spacing[40],
  '44': spacing[44],
  '48': spacing[48],
  '52': spacing[52],
  '56': spacing[56],
  '60': spacing[60],
  '64': spacing[64],
  '72': spacing[72],
  '80': spacing[80],
  '96': spacing[96],
}

const rounded = {
  'none': borderRadius.none,
  'full': borderRadius.full,
  'sm': borderRadius.sm,
  'md': borderRadius.md,
  'DEFAULT': borderRadius.DEFAULT,
  'lg': borderRadius.lg,
  'xl': borderRadius.xl,
  '2xl': borderRadius['2xl'],
  '3xl': borderRadius['3xl'],
}

const properties = defineProperties({
  properties: {
    color: colors,
    background: colors,
    display: ['none', 'flex', 'inline-flex', 'block', 'inline-block', 'inline'],
    flexDirection: ['row', 'column'],
    justifyContent: ['stretch', 'flex-start', 'center', 'flex-end', 'space-around', 'space-between'],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    marginTop: space,
    marginBottom: space,
    marginLeft: space,
    marginRight: space,
    gap: space,
    width: space,
    height: space,
    borderRadius: rounded,
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    mt: ['marginTop'],
    mb: ['marginBottom'],
    ml: ['marginLeft'],
    mr: ['marginRight'],
    pt: ['paddingTop'],
    pb: ['paddingBottom'],
    pl: ['paddingLeft'],
    pr: ['paddingRight'],
    mx: ['marginLeft', 'marginRight'],
    my: ['marginTop', 'marginBottom'],
    px: ['paddingLeft', 'paddingRight'],
    py: ['paddingTop', 'paddingBottom'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    placeItems: ['justifyContent', 'alignItems'],
    rounded: ['borderRadius'],
  },
})

export const atoms = createSprinkles(properties)
