import { useCallback } from 'react'
import slugify from 'slugify'
import { Wrapper, Image, Location, Name } from './style'

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
  photo,
  country,
  city,
  selected,
  setSelected,
}: SurvivorCompProps) {
  const thisSelected = slugify(name) === slugify(selected)

  const handleClick = useCallback(() => {
    setSelected(thisSelected ? '' : name)
  }, [setSelected, name, thisSelected])

  return (
    <Wrapper onClick={handleClick}>
      <Image>
        <img src={photo} alt="" />
      </Image>
      <Name>{name}</Name>
      <Location>
        {city} - {country}
      </Location>
    </Wrapper>
  )
}
