const colors = {
  white: '#FFFFFF',
  black: '#000000',
  gray: '#CCCCCC',
  darkgray: '#A9A9A9',
  darkergray: '#8B8B8B',
}

export interface ThemeProps {
  colors: { [key in keyof typeof colors]: string }
}

export const theme: ThemeProps = {
  colors,
}

export default theme
