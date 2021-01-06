import { useCallback } from 'react'
import slugify from 'slugify'
import { Wrapper, Location, Name } from './style'

export interface SurvivorProps {
  name: string
  photo: string
  country: string
  city: string
  specialities: string[]
  issues: string[]
  infected: boolean
}

export interface SurvivorCompProps extends SurvivorProps {
  selected: string
  setSelected: React.Dispatch<React.SetStateAction<string>>
}

export default function Survivor({
  name,
  country,
  city,
  infected,
  selected,
  setSelected,
}: SurvivorCompProps) {
  const thisSelected = slugify(name) === slugify(selected)

  const handleClick = useCallback(() => {
    setSelected(thisSelected ? '' : name)
  }, [setSelected, name, thisSelected])

  return (
    <Wrapper
      thisSelected={thisSelected}
      infected={infected}
      onClick={handleClick}
    >
      <Name>{name}</Name>
      <Location>
        {city} - {country}
      </Location>
    </Wrapper>
  )
}
