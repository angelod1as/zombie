import styled from 'styled-components'

export const Image = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  img {
    width: auto;
    height: 100%;
    max-height: 150px;
  }
`

export const Waiting = styled.div`
  display: flex;
  flex-direction: center;
  justify-content: center;
  h2 {
    font-family: 'Creepster', sans-serif;
    font-size: 1.4em;
    color: ${p => p.theme.colors.gray};
  }
`

export const Wrapper = styled.div``
export const Specialities = styled.div``
export const Issues = styled.div``
export const Infected = styled.div``
export const Grid = styled.div``
