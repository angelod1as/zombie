import styled from 'styled-components'

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  h1 {
    text-align: center;
    margin: 20px;
    color: ${p => p.theme.colors.red};
  }

  background-color: ${p => p.theme.colors.lightGreen};
`
