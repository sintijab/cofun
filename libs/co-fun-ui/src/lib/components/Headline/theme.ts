import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const headline = defineStyle({
  width: '95%',
  color: 'primary.white',
  fontWeight: '600',
  transition: 'all 400ms ease',
  margin: '0 auto',
})

export const headlineH1Theme = defineStyleConfig({
  variants: { headline },
  sizes: {
    sm: {
      fontSize: '2em',
    },
    md: {
      fontSize: '2.25em'
    },
    lg: {
      fontSize: ['2.5em', '2.75em'],
      color: 'red'
    }
  },
})