import { defineStyle, defineStyleConfig } from '@chakra-ui/react'


const nav = defineStyle({
  fontWeight: '600',
  fontOpticalSizing: 'auto',
  fontStyle: 'normal',
  fontSize: '12pt',
  padding: '0 1.5rem'
  })

export const linkTheme = defineStyleConfig({
  variants: { nav },
})