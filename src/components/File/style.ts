import styled, { css } from 'styled-components'

import scratch from './scratch.png'

export const Image = styled.div<{ infected: boolean }>`
  position: relative;
  width: 150px;
  height: 150px;

  img {
    border-radius: 50%;
    width: auto;
    height: 100%;
    max-height: 150px;
  }

  @media (min-width: 700px) {
    width: 300px;
    height: 300px;

    img {
      max-height: 300px;
    }
  }

  ${p =>
    p.infected &&
    css`
      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        /* background-color: ${p => p.theme.colors.red}; */
        background-image: url(${scratch});
        background-position: center center;
        background-size: contain;
        opacity: 0.6;
      }
    `}
`

export const Waiting = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    max-width: 300px;
    font-family: 'Creepster', sans-serif;
    font-size: 1.7em;
    color: ${p => p.theme.colors.darkGreen};
    text-align: center;
  }
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 700px) {
    justify-content: flex-start;
  }
`

export const Infected = styled.div`
  margin: 20px;
  input {
    display: none;
  }
  label {
    display: block;
    background-color: ${p => p.theme.colors.red};
    padding: 15px;
    border-radius: 5px;
    box-shadow: 3px 3px 0px ${p => p.theme.colors.lightRed};
    color: white;
    font-weight: bold;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: calc(100% - 40px);

  h3 {
    text-transform: uppercase;
    font-weight: bold;
    color: ${p => p.theme.colors.red};
    font-size: 1.1em;
    margin: 10px 0 5px 0;
  }

  li {
    position: relative;
    &:before {
      position: absolute;
      left: 0;
      color: ${p => p.theme.colors.red};
      line-height: 0;
    }
  }
`

export const Specialities = styled.div`
  text-align: right;
  li {
    padding-right: 18px;
    &:before {
      top: 11px;
      content: '✓';
      left: unset;
      right: 0;
    }
  }
`

export const Issues = styled.div`
  li {
    padding-left: 18px;

    &:before {
      top: 13px;
      content: '✗';
      font-size: 80%;
    }
  }
`
