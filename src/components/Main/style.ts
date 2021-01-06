import styled from 'styled-components'

export const Content = styled.div`
  padding: 30px 20px 50px 20px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 4em;
  }

  @media (min-width: 600px) {
    h1 {
      font-size: 4em;
    }
  }
`
export const Survivors = styled.div`
  margin-top: 20px;

  max-width: 100vw;
  display: flex;
  overflow: auto;
`

export const Grid = styled.div`
  /* display: grid;
  grid-template-columns: 300px 1fr; */
`

export const Sidebar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
