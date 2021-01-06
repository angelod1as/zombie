import styled, { keyframes } from 'styled-components'

const animation = keyframes`
  0% {
      transform: rotate(0deg);
  }
  100% {
      transform: rotate(360deg);
  }
`

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${p => p.theme.colors.lightGreen};

  h1 {
    text-align: center;
    margin: 20px;
    color: ${p => p.theme.colors.red};
  }

  img {
    animation-name: ${animation};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    max-width: 60px;
    width: 60px;
    height: auto;
  }
`
