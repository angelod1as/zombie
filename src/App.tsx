import { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { SurvivorProps } from './components/Survivor'
import Main from './components/Main'
import Error from './components/Error'
import Loading from './components/Loading'

const Wrapper = styled.div`
  max-width: 100vw;
`

export interface JsonData {
  survivors: SurvivorProps[]
}

function App() {
  const [data, setData] = useState<JsonData['survivors']>([])
  const [selected, setSelected] = useState('')
  const [error, setError] = useState(null)

  const getData = useCallback(async () => {
    try {
      const fetchResponse = await fetch('/data.json', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      const data: JsonData = await fetchResponse.json()
      const withInfected = data.survivors.map(survivor => {
        survivor.infected = false
        return survivor
      })
      setData(withInfected)
    } catch (error) {
      console.log(error)
      setError(error)
    }
  }, [])

  useEffect(() => {
    getData()
  }, [getData])

  const setInfected = useCallback(
    (name: string) => {
      if (data) {
        const survivors = data.map(survivor => {
          if (survivor.name === name) {
            survivor.infected = !survivor.infected
          }
          return survivor
        })
        setData(survivors)
      }
    },
    [data]
  )

  const rendered = () => {
    if (error) {
      return <Error {...{ error }} />
    }
    if (data) {
      return <Main {...{ data, selected, setSelected, setInfected }} />
    }
    return <Loading />
  }

  return <Wrapper>{rendered()}</Wrapper>
}

export default App
