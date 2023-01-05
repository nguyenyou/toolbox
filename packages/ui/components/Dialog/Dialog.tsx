import React from 'react'
import * as RadixDialog from '@radix-ui/react-dialog'
import * as styles from './Dialog.css'

type Props = {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode
}

const CloseIcon = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className={styles.CloseIcon}>
      <path
        fillRule='evenodd'
        d='M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z'
        clipRule='evenodd'
      />
    </svg>
  )
}

const Dialog = (props: Props) => {
  const { open, onOpenChange, children } = props

  return (
    <RadixDialog.Root open={open} onOpenChange={onOpenChange}>
      <RadixDialog.Portal>
        <RadixDialog.Overlay className={styles.DialogOverlay} />
        <RadixDialog.Content className={styles.DialogContent}>
          {children}
          <RadixDialog.Close asChild>
            <button aria-label='Close' className={styles.CloseButton}>
              <CloseIcon />
            </button>
          </RadixDialog.Close>
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  )
}

export default Dialog
