import clsx from 'clsx'
import React, { forwardRef } from 'react'
import Spinner from '../Spinner/Spinner'
import type { ButtonVariants } from './Button.css'
import * as styles from './Button.css'

export type ButtonProps = {
  loading?: boolean
} & ButtonVariants &
  React.ComponentPropsWithoutRef<'button'>

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, color, weight, rounded, size, variant, stretch, className, loading, disabled, ...rest }, ref) => {
    const recipeClasses = styles.buttonRecipe({
      color,
      weight,
      rounded,
      size,
      variant,
      stretch,
      disabled
    })

    const recipeButtonTextClasses = styles.buttonTextRecipe({
      loading,
    })

    let shouldDisabled = loading

    if (typeof disabled !== 'undefined') {
      // respect the disabled prop if it's passed
      shouldDisabled = disabled
    }

    const classes = clsx(recipeClasses, className)

    return (
      <button disabled={shouldDisabled} ref={ref} className={classes} {...rest}>
        <span className={recipeButtonTextClasses}>{children}</span>
        {loading && (
          <div className={styles.buttonSpinnerWrapper}>
            <Spinner />
          </div>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
