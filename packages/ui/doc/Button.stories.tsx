import type { Meta, StoryObj } from '@storybook/react'
import { Button, Box } from '../index'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
  component: Button,
  tags: ['docsPage'],
}

export default meta
type Story = StoryObj<typeof Button>

export const Basic: Story = {
  args: {
    color: 'primary',
    children: 'Button',
  },
}

export const Color: Story = {
  render: () => (
    <div>
      <Box display='flex' gap='2'>
        <Button color='primary'>PRIMARY</Button>
        <Button color='secondary'>SECONDARY</Button>
      </Box>
      <Box display='flex' gap='2' mt='2'>
        <Button variant='outline' color='primary'>
          PRIMARY
        </Button>
        <Button variant='outline' color='secondary'>
          SECONDARY
        </Button>
      </Box>
    </div>
  ),
}


export const Disabled: Story = {
  render: () => (
    <div>
      <Box display='flex' gap='2'>
        <Button disabled color='primary'>PRIMARY</Button>
        <Button disabled color='secondary'>SECONDARY</Button>
      </Box>
      <Box display='flex' gap='2' mt='2'>
        <Button disabled variant='outline' color='primary'>
          PRIMARY
        </Button>
        <Button disabled variant='outline' color='secondary'>
          SECONDARY
        </Button>
      </Box>
    </div>
  ),
}

export const Variant: Story = {
  render: () => (
    <Box display='flex' gap='2'>
      <Button color='primary' variant='outline'>
        PRIMARY
      </Button>
      <Button color='primary' variant='solid'>
        PRIMARY
      </Button>
    </Box>
  ),
}

export const Loading: Story = {
  render: () => (
    <div>
      <Box display='flex' gap='2'>
        <Button loading color='primary'>
          PRIMARY
        </Button>
        <Button loading color='secondary'>
          SECONDARY
        </Button>
      </Box>
      <Box display='flex' gap='2' mt='2'>
        <Button loading variant='outline' color='primary'>
          PRIMARY
        </Button>
        <Button loading variant='outline' color='secondary'>
          SECONDARY
        </Button>
      </Box>
    </div>
  ),
}

export const Radius: Story = {
  render: () => (
    <Box display='flex' gap='2'>
      <Button color='secondary' rounded='normal'>
        NORMAL
      </Button>
      <Button color='secondary' rounded='full'>
        PILL
      </Button>
    </Box>
  ),
}
