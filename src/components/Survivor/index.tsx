import { nanoid } from 'nanoid'
import slugify from 'slugify'
import SeeMore from 'src/components/SeeMore'
import {
  Wrapper,
  Image,
  Grid,
  Issues,
  Location,
  Name,
  Specialities,
  Infected,
} from './style'

export interface SurvivorProps {
  name: string
  photo: string
  country: string
  city: string
  specialities: string[]
  issues: string[]
  infected: boolean
  selected: string
  setInfected: (name: string) => void
  setSelected: React.Dispatch<React.SetStateAction<string>>
}

export default function Survivor({
  name,
  photo,
  country,
  city,
  specialities,
  issues,
  selected,
  infected,
  setSelected,
  setInfected,
}: SurvivorProps) {
  const thisSelected = slugify(name) === slugify(selected)

  return (
    <Wrapper>
      <Image>
        <img src={photo} alt="" />
      </Image>
      <Name>{name}</Name>
      <Location>
        {city} - {country}
      </Location>
      <SeeMore {...{ setSelected, name, thisSelected }} />
      {thisSelected && (
        <>
          <Infected>
            <label htmlFor="infected">Infected</label>
            <input
              type="checkbox"
              name="infected"
              id="infected"
              checked={infected}
              onChange={() => setInfected(name)}
            />
          </Infected>
          <Grid>
            <Specialities>
              <h3>Specialities</h3>
              {specialities.map(speciality => (
                <p key={nanoid()}>{speciality}</p>
              ))}
            </Specialities>
            <Issues>
              <h3>Issues</h3>
              {issues.map(issue => (
                <p key={nanoid()}>{issue}</p>
              ))}
            </Issues>
          </Grid>
        </>
      )}
    </Wrapper>
  )
}
