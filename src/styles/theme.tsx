const colors = {
  white: '#FFFFFF',
  black: '#000000',
  gray: '#CCCCCC',
  darkgray: '#A9A9A9',
  darkergray: '#8B8B8B',
  blue: 'hsla(209, 100%, 26%, 1)',
  orange: 'hsla(31, 84%, 52%, 1)',
  darkOrange: 'hsla(31, 84%, 30%, 1)',
}

export interface ThemeProps {
  colors: { [key in keyof typeof colors]: string }
}

export const theme: ThemeProps = {
  colors,
}

export default theme
