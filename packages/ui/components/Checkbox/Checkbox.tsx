import React from 'react'
import * as RadixCheckbox from '@radix-ui/react-checkbox'
import * as styles from './Checkbox.css'
import type {CheckboxVariants} from './Checkbox.css'
import clsx from 'clsx'

type CheckedState = boolean | 'indeterminate';

const CheckboxIcon = (props: any) => (
  <svg
    viewBox="0 0 16 16"
    fill="#fff"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12.207 4.793a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L6.5 9.086l4.293-4.293a1 1 0 0 1 1.414 0z" />
  </svg>
)

type Props = {
  id?: string
  checked: CheckedState
  onCheckedChange: (checked: CheckedState) => void
  className?: string
  disabled?: boolean
} & CheckboxVariants

const Checkbox = ({ id, checked, onCheckedChange, color, className, disabled }: Props) => {

  const recipeClasses = styles.checkboxRecipe({
    color,
  })

  const classes = clsx(recipeClasses, className)


  return (
    <RadixCheckbox.Root
      disabled={disabled}
      checked={checked}
      onCheckedChange={onCheckedChange}
      className={classes}
      id={id}
    >
      <RadixCheckbox.Indicator className={styles.CheckboxIndicator}>
        <CheckboxIcon className={styles.CheckIcon}/>
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  )
}

Checkbox.displayName = 'Checkbox'

export default Checkbox
