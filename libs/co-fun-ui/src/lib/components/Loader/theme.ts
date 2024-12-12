import { defineStyle, defineStyleConfig } from '@chakra-ui/react'


export const loaderTheme = defineStyleConfig({
  baseStyle: {
    range: {
      _indeterminate: {
        backgroundImage: "linear-gradient(to right,transparent 0%, #d4a7da 50%,transparent 100%)"
      }
    }
  },
})