import { keyframes, style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const spin = keyframes({
  '100%': {
    transform: 'rotate(360deg)',
  },
})

export const spinnerRecipe = recipe({
  base: {
    animation: `${spin} 1s linear infinite`,
  },

  variants: {
    size: {
      xsmall: {
        width: 12,
        height: 12,
      },
      small: {
        width: 16,
        height: 16,
      },
      medium: {
        width: 24,
        height: 24,
      },
      large: {
        width: 32,
        height: 32,
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },
})

export const fullCircle = style({
  opacity: 0.3,
})

export const halfCircle = style({
  opacity: 0.7,
})
