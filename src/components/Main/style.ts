import styled from 'styled-components'

export const Content = styled.div`
  padding: 30px 20px 50px 20px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;

  min-height: 100vh;

  background-color: ${p => p.theme.colors.lightGreen};
  h1 {
    font-size: 4em;
    color: ${p => p.theme.colors.lightRed};
    text-shadow: 3px 3px 0px ${p => p.theme.colors.red};
  }

  @media (min-width: 700px) {
    h1 {
      font-size: 7em;
    }
  }
`
export const Survivors = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  max-width: 100vw;
  margin: 15px 0;
  padding: 15px 0 15px 0;

  * {
    flex: 0 0 auto;
  }

  @media (min-width: 700px) {
    max-width: unset;
    flex-direction: column;
    flex-wrap: initial;
    overflow-x: hidden;
  }
`

export const Grid = styled.div`
  width: 100%;

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: 300px 1fr;
  }
`

export const Sidebar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
