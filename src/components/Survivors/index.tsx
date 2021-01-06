import { nanoid } from 'nanoid'
import { Wrapper } from './style'
import Survivor, { SurvivorProps } from './Survivor'

interface SurvivorsProps {
  survivors: SurvivorProps[]
  selected: string
  setSelected: React.Dispatch<React.SetStateAction<string>>
}

export default function Survivors({
  survivors,
  selected,
  setSelected,
}: SurvivorsProps) {
  return (
    <Wrapper>
      {survivors.map(survivor => (
        <Survivor key={nanoid()} {...{ ...survivor, selected, setSelected }} />
      ))}
    </Wrapper>
  )
}
