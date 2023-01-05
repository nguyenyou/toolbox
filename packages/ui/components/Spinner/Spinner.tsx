import clsx from 'clsx'
import React from 'react'
import * as styles from './Spinner.css'

type ISpinProps = {
  size?: 'xsmall' | 'small' | 'medium' | 'large'
  inButton?: boolean
}
type SpinProps = React.HTMLAttributes<SVGSVGElement> & ISpinProps

const Spinner = React.forwardRef<SVGSVGElement, SpinProps>((props, ref) => {
  const { size = 'small', className, ...rest } = props

  const recipeClasses = styles.spinnerRecipe({
    size,
  })

  const classes = clsx(recipeClasses, className)

  return (
    <svg
      ref={ref}
      className={classes}
      fill='none'
      stroke='currentColor'
      viewBox='0 0 66 66'
      xmlns='http://www.w3.org/2000/svg'
      {...rest}
    >
      <circle className={styles.fullCircle} cx='33' cy='33' fill='none' r='28' stroke='currentColor' strokeWidth='10' />
      <circle
        className={styles.halfCircle}
        cx='33'
        cy='33'
        fill='none'
        r='28'
        stroke='currentColor'
        strokeDasharray='40, 134'
        strokeDashoffset='325'
        strokeLinecap='round'
        strokeWidth='10'
      />
    </svg>
  )
})

Spinner.displayName = 'Spinner'

export default Spinner
