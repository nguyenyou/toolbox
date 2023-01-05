import type { Meta, StoryObj } from '@storybook/react'
import { Badge, Box } from '../index'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Badge> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Badge',
  component: Badge,
  tags: ['docsPage'],
}

export default meta
type Story = StoryObj<typeof Badge>

export const Basic: Story = {
  args: {
    color: 'primary',
    children: '2',
  },
}

export const Color: Story = {
  render: () => (
    <div>
      <Box display='flex'>
        <Badge color='primary'>2</Badge>
        <Badge color='secondary'>2</Badge>
        <Badge color='neutral'>2</Badge>
      </Box>
    </div>
  ),
}

export const Size: Story = {
  render: () => (
    <div>
      <div>
        <Badge size='small' color='primary'>
          2
        </Badge>
      </div>
      <div>
        <Badge size='medium' color='primary'>
          2
        </Badge>
      </div>
    </div>
  ),
}

export const Weight: Story = {
  render: () => (
    <div>
      <div>
        <Badge weight='normal' rounded='sm' size='small' color='primary'>
          Mới
        </Badge>
      </div>
      <div>
        <Badge weight='bold' rounded='sm' size='small' color='primary'>
          Mới
        </Badge>
      </div>
      <div>
        <Badge weight='normal' rounded='sm' size='medium' color='primary'>
          Mới
        </Badge>
      </div>
      <div>
        <Badge weight='bold' rounded='sm' size='medium' color='primary'>
          Mới
        </Badge>
      </div>
    </div>
  ),
}

export const Rounded: Story = {
  render: () => (
    <div>
      <div>
        <Badge rounded='sm' color='primary'>
          2
        </Badge>
      </div>
      <div>
        <Badge rounded='full' color='primary'>
          2
        </Badge>
      </div>
      <div>
        <Badge size='medium' rounded='sm' color='primary'>
          999
        </Badge>
      </div>
      <div>
        <Badge size='medium' rounded='full' color='primary'>
          999
        </Badge>
      </div>
    </div>
  ),
}
