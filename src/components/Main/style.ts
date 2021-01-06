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

  @media (min-width: 600px) {
    h1 {
      font-size: 4em;
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
`

export const Grid = styled.div`
  width: 100%;
`

export const Sidebar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
