import { style } from '@vanilla-extract/css'
import { vars } from '../../theme/vars.css'
import type { RecipeVariants } from '@vanilla-extract/recipes'
import { recipe } from '@vanilla-extract/recipes'

export const checkboxRecipe = recipe({
  base: {
    width: 20,
    height: 20,
    display: 'flex',
    flexShrink: 0,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid',
    ':focus': {
      outline: 'none'
    },
    selectors: {
      '&[data-state=checked]': {
        backgroundColor: 'currentcolor',
        borderColor: 'currentcolor',
      },
      '&[data-state=unchecked]': {
        backgroundColor: vars.color.background,
        borderColor: vars.color.border,
      },
      '&[data-disabled]': {
        backgroundColor: vars.color.background,
        borderColor: vars.color.background,
        cursor: 'not-allowed'
      }
    },
  },
  variants: {
    color: {
      primary: {
        color: vars.color.primary,
      },
      secondary: {
        color: vars.color.secondary,
      },
      neutral: {
        color: vars.color.neutral,
      },
    },
  },
  defaultVariants: {
    color: 'primary',
  },
})

// Get the type
export type CheckboxVariants = RecipeVariants<typeof checkboxRecipe>

export const CheckboxIndicator = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyItems: 'center'
})

export const CheckIcon = style({
  width: 20,
  height: 20,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  display: 'inline-block',
})
