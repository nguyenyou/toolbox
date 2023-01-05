import { style } from '@vanilla-extract/css'
import { vars } from '../../theme/vars.css'
import type { RecipeVariants } from '@vanilla-extract/recipes'
import { recipe } from '@vanilla-extract/recipes'
import { gray } from 'tailwindcss/colors'

export const root = style({})

export const item = style({
  width: 20,
  height: 20,
  borderRadius: 9999,
  background: gray[200],
  ':focus': {
    outline: 'none'
  },
  selectors: {
    ['&[data-disabled][disabled]']: {
      cursor: 'not-allowed',
      border: 'none',
    },
    ['&[data-state="unchecked"]']: {
      border: `1px solid ${vars.color.border}`,
    }
  }
})

export const indicatorRecipe = recipe({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    borderRadius: 9999,
    ':after': {
      content: '""',
      width: 8,
      height: 8,
      borderRadius: 9999,
      background: 'white'
    },
    selectors: {
      [`&[data-disabled]`]: {
        background: `${vars.color.background}`,
      }
    }
  },
  variants: {
    color: {
      primary: {
        background: vars.color.primary
      },
      secondary: {
        background: vars.color.secondary,
      },
    }
  },
  defaultVariants: {
    color: 'primary'
  }
})

export type IndicatorVariants = RecipeVariants<typeof indicatorRecipe>
