import { style } from '@vanilla-extract/css'
import type { RecipeVariants } from '@vanilla-extract/recipes'
import { recipe } from '@vanilla-extract/recipes'
import { vars } from '../../theme/vars.css'

export const buttonRecipe = recipe({
  base: {
    cursor: 'pointer',
    display: 'inline-flex',
    fontWeight: 'normal',
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    textDecoration: 'none',
    position: 'relative',
    ':focus': {
      outline: 'none',
    },
    ':disabled': {
      cursor: 'not-allowed',
    },
  },

  variants: {
    disabled: {
      true: {
        cursor: 'not-allowed',
      },
    },
    variant: {
      solid: {},
      outline: {
        borderColor: 'currentColor',
        backgroundColor: 'transparent',
        color: 'currentColor',
      },
    },
    stretch: {
      true: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      },
    },
    weight: {
      normal: {
        fontWeight: 'normal',
      },
      bold: {
        fontWeight: 'bold',
      },
    },
    size: {
      small: {
        fontSize: 12,
        lineHeight: 1,
        padding: '5px 11px',
      },
      medium: {
        fontSize: 14,
        lineHeight: 1,
        padding: '8px 16px',
      },
      large: {
        fontSize: 16,
        lineHeight: 1.25,
        padding: '9px 19px',
      },
    },
    rounded: {
      normal: {
        borderRadius: 4,
      },
      full: {
        borderRadius: 9999,
      },
    },
    color: {
      primary: {
        color: 'white',
        backgroundColor: vars.color.primary,
        borderColor: vars.color.primary,
        ':hover': {
          color: 'white',
          backgroundColor: vars.color.primaryLight,
          borderColor: vars.color.primaryLight,
        },
        ':active': {
          color: 'white',
          backgroundColor: vars.color.primaryDark,
          borderColor: vars.color.primaryDark,
        },
      },
      secondary: {
        color: 'white',
        backgroundColor: vars.color.secondary,
        borderColor: vars.color.secondary,
        ':hover': {
          color: 'white',
          backgroundColor: vars.color.secondaryLight,
          borderColor: vars.color.secondaryLight,
        },
        ':active': {
          color: 'white',
          backgroundColor: vars.color.secondaryDark,
          borderColor: vars.color.secondaryDark,
        },
      },
    },
  },

  compoundVariants: [
    {
      variants: {
        variant: 'outline',
        color: 'primary',
      },
      style: {
        color: vars.color.primary,
        background: 'transparent',
        borderColor: 'currentColor',

        ':hover': {
          color: vars.color.primaryLight,
          background: vars.color.primaryBG,
        },
        ':active': {
          color: vars.color.primaryDark,
        },
      },
    },
    {
      variants: {
        variant: 'outline',
        color: 'secondary',
      },
      style: {
        color: vars.color.secondary,
        background: 'transparent',
        borderColor: 'currentColor',

        ':hover': {
          color: vars.color.secondaryLight,
          background: vars.color.secondaryBG,
        },

        ':active': {
          color: vars.color.secondaryDark,
        },
      },
    },
    {
      variants: {
        variant: 'solid',
        disabled: true,
      },
      style: {
        color: 'white',
        background: `${vars.color.neutral} !important`,
        borderColor: `${vars.color.neutral} !important`,

        ':hover': {
          color: 'white',
          background: `${vars.color.neutral} !important`,
          borderColor: `${vars.color.neutral} !important`,
        },

        ':active': {
          color: 'white',
          background: `${vars.color.neutral} !important`,
          borderColor: `${vars.color.neutral} !important`,
        },
      },
    },
  ],

  defaultVariants: {
    color: 'primary',
    size: 'large',
    rounded: 'normal',
    weight: 'bold',
    variant: 'solid',
  },
})

export const buttonSpinnerWrapper = style({
  position: 'absolute',
  inset: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  pointerEvents: 'none',
})

export const buttonTextRecipe = recipe({
  base: {},
  variants: {
    loading: {
      true: {
        visibility: 'hidden',
      },
    },
  },
  defaultVariants: {
    loading: false,
  },
})

// Get the type
export type ButtonVariants = RecipeVariants<typeof buttonRecipe>
