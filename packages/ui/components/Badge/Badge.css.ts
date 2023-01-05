import { recipe } from '@vanilla-extract/recipes'
import type { RecipeVariants } from '@vanilla-extract/recipes'
import { vars } from '../../theme/vars.css'

export const badgeRecipe = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    border: '1px solid white',
  },

  variants: {
    color: {
      primary: {
        backgroundColor: vars.color.primary,
      },
      secondary: {
        backgroundColor: vars.color.secondary,
      },
      neutral: {
        backgroundColor: vars.color.neutral
      }
    },
    rounded: {
      sm: {
        borderRadius: 4
      },
      full: {
        borderRadius: 9999
      }
    },
    weight: {
      normal: {
        fontWeight: 400
      },
      bold: {
        fontWeight: 700
      }
    },
    size: {
      small: {
        fontSize: 10,
        lineHeight: '10px',
        paddingLeft: 4,
        paddingRight: 4,
        paddingTop: 2,
        paddingBottom: 2,
      },
      medium: {
        fontSize: 12,
        lineHeight: '10px',
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 3,
        paddingBottom: 3,
      }
    }
  },

  defaultVariants: {
    color: 'primary',
    rounded: 'full',
    size: 'small',
    weight: 'bold'
  }
})

export type BadgeVariants = RecipeVariants<typeof badgeRecipe>
