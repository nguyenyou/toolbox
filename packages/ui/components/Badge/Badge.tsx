import clsx from 'clsx'
import React, { forwardRef } from 'react'
import type { BadgeVariants } from './Badge.css'
import * as styles from './Badge.css'

type BadgeProps = {
} & BadgeVariants &
  React.ComponentPropsWithoutRef<'span'>

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(({ children, className, color, size, rounded, weight, ...rest }, ref) => {
  const recipeClasses = styles.badgeRecipe({
    color,
    size,
    rounded,
    weight
  })

  const classes = clsx(recipeClasses, className)

  return (
    <span className={classes} {...rest} ref={ref}>
      {children}
    </span>
  )
})

Badge.displayName = 'Badge'

export default Badge
