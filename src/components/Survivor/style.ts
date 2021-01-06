import styled, { css } from 'styled-components'

interface WrapperProps {
  thisSelected: boolean
  infected: boolean
}

export const Wrapper = styled.button<WrapperProps>`
  cursor: pointer;
  border: 0;
  background-color: transparent;

  min-width: 200px;

  background-color: ${p =>
    p.thisSelected ? p.theme.colors.red : p.theme.colors.darkGreen};
  padding: 10px;
  border-radius: 5px;
  box-shadow: 3px 3px 0px
    ${p => (p.thisSelected ? p.theme.colors.lightRed : p.theme.colors.green)};

  margin: 0 10px;
  padding: 20px 0;

  position: relative;

  ${p =>
    p.infected &&
    css`
      &:after {
        color: ${p.thisSelected
          ? p.theme.colors.darkGreen
          : p.theme.colors.red};
        opacity: 0.7;
        content: 'X';
        font-family: 'Creepster', sans-serif;
        position: absolute;
        font-size: 8.5em;
        line-height: 0.6em;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
      }
    `}

  @media (min-width: 700px) {
    margin: 10px 0;
    min-width: 300px;
  }
`

export const Name = styled.h2`
  color: white;
  font-size: 1.3em;
`

export const Location = styled.p`
  color: white;
  margin: 0;
`
