import { keyframes, style } from '@vanilla-extract/css'

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

const contentShow = keyframes({
  '0%': { transform: 'translate(-50%, -48%) scale(0.96)', opacity: 0 },
  '100%': { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
})

const slideUp = keyframes({
  '0%': { transform: 'translateY(100%)' },
  '100%': { transform: 'translateY(0)' },
})

export const DialogOverlay = style({
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  zIndex: 2000,
})

export const DialogContent = style({
  backgroundColor: 'white',
  borderTopLeftRadius: 8,
  borderTopRightRadius: 8,
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  zIndex: 2001,
  bottom: 0,
  left: 0,
  right: 0,
  width: '100vw',
  maxHeight: '95vh',
  overflow: 'auto',
  animation: `${slideUp} 200ms ease-out`,
  ':focus': {
    outline: 'none',
  },
  '@media': {
    'screen and (min-width: 768px)': {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '90vw',
      maxWidth: 480,
      bottom: 'unset',
      borderRadius: 8,
      animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
  },
})

export const CloseButton = style({
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: 4,
  left: 4,
  padding: 8,
  borderRadius: 9999,
  ':focus': {
    outline: 'none',
  },
  ':hover': {
    backgroundColor: '#F4F4F4',
  },
})

export const CloseIcon = style({
  width: 24,
  height: 24,
})
