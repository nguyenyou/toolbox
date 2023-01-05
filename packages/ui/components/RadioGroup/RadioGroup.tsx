import * as RadixRadioGroup from '@radix-ui/react-radio-group'
import * as styles from './RadioGroup.css'
import type { IndicatorVariants } from './RadioGroup.css'

type RootProps = {
  value: string
  onValueChange: (value: string) => void
  className?: string
  disabled?: boolean
  children: React.ReactNode
}

export const Root = ({ value, onValueChange, className, children, disabled }: RootProps) => {
  return (
    <RadixRadioGroup.Root disabled={disabled} className={`${styles.root} ${className}`} value={value} onValueChange={onValueChange}>
      {children}
    </RadixRadioGroup.Root>
  )
}

type ItemProps = {
  id?: string
  value: string
  className?: string
} & IndicatorVariants

export const Item = ({ id, value, color }: ItemProps) => {
  const recipeClasses = styles.indicatorRecipe({
    color,
  })

  return (
    <RadixRadioGroup.Item className={styles.item} id={id} value={value}>
      <RadixRadioGroup.Indicator className={recipeClasses} />
    </RadixRadioGroup.Item>
  )
}

const RadioGroup = {
  Root,
  Item,
}

export default RadioGroup
