import { nanoid } from 'nanoid'
import { useState } from 'react'
import slugify from 'slugify'
import Search from '../Search'
import Survivor, { SurvivorProps } from '../Survivor'
import { Content, Survivors } from './style'

interface MainProps {
  data: SurvivorProps[]
  selected: string
  setSelected: React.Dispatch<React.SetStateAction<string>>
  setInfected: (name: string) => void
}

export default function Main({
  data,
  selected,
  setSelected,
  setInfected,
}: MainProps) {
  const [search, setSearch] = useState('')

  return (
    <Content>
      <h1>Outbreak</h1>
      <Search {...{ search, setSearch }} />
      <Survivors>
        {data
          .filter(survivor => {
            const safeName = slugify(survivor.name, { lower: true })
            const safeSearch = slugify(search, { lower: true })
            return safeName.includes(safeSearch)
          })
          .map(survivor => (
            <Survivor
              key={nanoid()}
              {...{ ...survivor, selected, setSelected, setInfected }}
            />
          ))}
      </Survivors>
    </Content>
  )
}
