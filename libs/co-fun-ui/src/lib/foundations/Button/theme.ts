import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const primary = defineStyle({
    background: 'button.action',
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

const outline_dark = defineStyle({
  background: 'primary.white',
  fontWeight: '600',
  letterSpacing: '0.02em',
  color: 'primary.default',
  fontFamily: '"Inter", sans-serif;',
  fontSize: '10.5pt',
  border: '1px',
  borderColor: 'border.dark',
})

const list = defineStyle({
  background: 'primary.white',
  fontWeight: '600',
  letterSpacing: '0.02em',
  color: 'primary.dark',
  fontFamily: '"Inter", sans-serif;',
  fontSize: '10.5pt',
  border: '1px',
  borderColor: 'border.dark',
  borderRadius: '.7rem',
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
    cursor: 'pointer',
  },
  variants: { primary, outline, outline_dark, transparent, list },
  sizes: {
    sm: {
      fontSize: '10.5pt',
      padding: '1.2rem 1.3rem',
      display: 'inline-flex'
    },
    lg: {
      fontSize: '13.5pt',
      padding: '1.9rem 2rem',
      display: 'inline-flex'
    }
  },
})