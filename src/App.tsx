import { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import Survivors from './components/Survivors'
import { SurvivorProps } from './components/Survivors/Survivor'

const Wrapper = styled.div``
const Error = styled.div``
const Content = styled.div`
  padding: 0 20px;
  margin: 40px auto;
  max-width: 620px;
`
const Loading = styled.div``

export interface JsonData {
  survivors: SurvivorProps[]
}

function App() {
  const [data, setData] = useState<JsonData['survivors']>()
  const [selected, setSelected] = useState('')
  const [error, setError] = useState()

  const getData = useCallback(async () => {
    try {
      const fetchResponse = await fetch('/data.json', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      const data: JsonData = await fetchResponse.json()
      setData(data.survivors)
    } catch (error) {
      console.log(error)
      setError(error)
    }
  }, [])

  useEffect(() => {
    getData()
  }, [getData])

  const rendered = () => {
    if (error) {
      return <Error>Ocorreu um erro, tente novamente mais tarde</Error>
    }
    if (data) {
      return (
        <Content>
          <h1>Outbreak</h1>
          <Survivors survivors={data} {...{ selected, setSelected }} />
        </Content>
      )
    }
    return <Loading />
  }

  return <Wrapper>{rendered()}</Wrapper>
}

export default App
