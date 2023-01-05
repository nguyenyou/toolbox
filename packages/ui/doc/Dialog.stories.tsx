import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Dialog } from '../index'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Dialog> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Dialog',
  component: Dialog,
  tags: ['docsPage'],
}

export default meta
type Story = StoryObj<typeof Dialog>

const DialogWithHooks = () => {
  const [open, setOpen] = useState(false)

  const handleOpenChange = (flag: boolean) => {
    setOpen(flag)
  }

  return (
    <>
      <button onClick={() => setOpen(true)}>Open</button>
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <div style={{ padding: 16, paddingTop: 40 }}>
          <h1>Dialog</h1>
          <p>Dialog content</p>
          <button onClick={() => setOpen(false)}>Close</button>
        </div>
      </Dialog>
    </>
  )
}

export const Basic: Story = {
  render: () => <DialogWithHooks />,
}
