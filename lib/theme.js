import { extendTheme } from '@chakra-ui/react'


const fonts = {
  body: 'Monaco',
  text: 'Monaco',
  heading: 'Monaco',
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({ config, fonts })
export default theme

