import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import type { CheckboxVariants } from '../components/Checkbox/Checkbox.css'
import { Box, Checkbox } from '../index'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Checkbox> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Checkbox',
  component: Checkbox,
  tags: ['docsPage'],
}

export default meta
type Story = StoryObj<typeof Checkbox>

type Props = {
  id: string
} & CheckboxVariants

const CheckboxWithHooks = ({ color = 'primary', id }: Props) => {
  const [checked, setChecked] = useState<boolean | 'indeterminate'>(true)

  return (
    <Box>
      <Box display='flex' gap='2' alignItems='center'>
        <Checkbox color={color} checked={checked} onCheckedChange={setChecked} id={id} />
        <label className='Label' htmlFor={id}>
          Accept terms and conditions.
        </label>
      </Box>
    </Box>
  )
}

export const Basic: Story = {
  render: () => <CheckboxWithHooks id='c1' />,
}

export const Color: Story = {
  render: () => (
    <Box display='flex' flexDirection='column'>
      <CheckboxWithHooks id='c2' color='primary' />
      <CheckboxWithHooks id='c3' color='secondary' />
    </Box>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Box display='flex' flexDirection='column' >
      <Checkbox disabled checked onCheckedChange={() => {}} />
      <Checkbox disabled checked={false} onCheckedChange={() => {}} />
    </Box>
  ),
}
