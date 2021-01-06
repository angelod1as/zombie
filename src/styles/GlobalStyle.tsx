import { createGlobalStyle } from 'styled-components'
import normalize from 'styled-normalize'
import reset from 'styled-reset'
import { ThemeProps } from './theme'

interface GlobalProps {
  theme: ThemeProps
}

const GlobalStyle = createGlobalStyle<GlobalProps>`
  /* reset and normalize */
  ${reset}
  ${normalize}

  html, body {
    height: 100;
    font-family: 'Sanchez', serif;
    font-size: 18px;
    line-height: 120%;
  }

  h1 {
    font-size: 1.6em;
    color: ${p => p.theme.colors.blue};
    line-height: 120%;
    position: relative;
    margin-bottom: 30px;
    &:after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0px;
      width: 60px;
      height: 4px;
      background-color: ${p => p.theme.colors.orange};
    }
  }

  h2 {
    font-size: 1.3em;
    color: ${p => p.theme.colors.blue};
    line-height: 120%;
    margin-bottom: 20px;
  }

  p.lead {
    margin-bottom: 40px;
  }

  p {
    margin-bottom: 15px;
  }

  button {
    display: block;
    color: white;
    text-transform: uppercase;
    background-color: ${p => p.theme.colors.orange};
    border-radius: 12px;
    padding: 10px 15px;
    border: none;
    box-shadow: none;
    transition: background-color 0.2s ease;
    cursor: pointer;
    &:hover {
      background-color: ${p => p.theme.colors.darkOrange}
    }
    &:disabled {
      background-color: ${p => p.theme.colors.darkgray}
    }
  }
`

export default GlobalStyle
