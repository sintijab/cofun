import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const primary = defineStyle({
    background: 'primary.green',
    fontWeight: '500',
    letterSpacing: '0.02em',
    textTransform: 'uppercase',
    color: 'primary.white',
  })
const outline = defineStyle({
  background: 'primary.white',
  fontWeight: '600',
  letterSpacing: '0.02em',
  color: 'border.action',
  fontFamily: '"Inter", sans-serif;',
  fontSize: '10.5pt',
  border: '2px',
  borderColor: 'border.action',
})

const transparent = defineStyle({
  background: 'rgba(255, 255, 255, 0.8)',
  fontWeight: '500',
  letterSpacing: '0.02em',
  color: 'primary.dark',
  fontFamily: '"Inter", sans-serif;',
  fontSize: '10.5pt',
})

export const buttonTheme = defineStyleConfig({
  baseStyle: {
    fontFamily: '"Poppins", sans-serif;',
    color: 'primary.default',
    border: '0',
    borderRadius: '10rem',
    cursor: 'pointer'
  },
  variants: { primary, outline, transparent },
  sizes: {
    sm: {
      fontSize: '10.5pt',
      padding: '1.2rem 1.3rem',
      display: 'inline-flex'
    },
    lg: {
      fontSize: '16.5pt',
      padding: '1.9rem 2rem',
      display: 'inline-flex'
    }
  },
})