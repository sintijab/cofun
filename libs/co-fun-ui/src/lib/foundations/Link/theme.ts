import { defineStyle, defineStyleConfig } from '@chakra-ui/react'


const nav = defineStyle({
  fontWeight: '600',
  fontOpticalSizing: 'auto',
  fontStyle: 'normal',
  fontSize: '12pt',
  padding: ['0 1rem', '0 1.5rem']
  })


const link = defineStyle({
  fontWeight: '500',
  fontFamily: 'Poppins',
  fontOpticalSizing: 'auto',
  fontStyle: 'normal',
  fontSize: '12pt',
  padding: '0 1.5rem',
  color: 'primary.green'
  })

  const card = defineStyle({
    fontWeight: 'semibold',
    lineHeight: '120%',
    letterSpacing: '-0.02em',
    fontSize: '17.75pt',
    color: 'primary.white'
  })

  const poster = defineStyle({
    textDecoration: 'none',
    padding: '0.6em 2em',
    textTransform: 'uppercase',
    fontWeight: '500',
    letterSpacing: '1px',
    fontSize: '0.9rem',
    borderRadius: '25px',
    border: '1px solid white',
    color: 'primary.white',
    transition: 'all 250ms ease',
  })

  const action = defineStyle({
    textDecoration: 'none',
    padding: ' 0 0 0.1em',
    textTransform: 'uppercase',
    fontWeight: '500',
    letterSpacing: '1px',
    fontSize: ['8em', '10em'],
    color: 'reviews.green',
    transition: 'all 250ms ease',
  })

export const linkTheme = defineStyleConfig({
  variants: { nav, card, poster, action, link},
})