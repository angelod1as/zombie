import { nanoid } from 'nanoid'
import { SurvivorProps } from '../Survivor'
import {
  Wrapper,
  Grid,
  Infected,
  Issues,
  Specialities,
  Image,
  Waiting,
} from './style'

interface FileProps {
  selectedSurvivor: SurvivorProps | undefined
  setInfected: (name: string) => void
}

export default function File({ selectedSurvivor, setInfected }: FileProps) {
  if (selectedSurvivor) {
    const { name, photo, specialities, issues, infected } = selectedSurvivor
    return (
      <Wrapper>
        <Image infected={infected}>
          <img src={`/static/${photo}`} alt="" />
        </Image>
        <Infected>
          <label htmlFor="infected">
            {infected ? 'uncheck infection' : 'mark as infected'}
          </label>
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
            <ul>
              {specialities.map(speciality => (
                <li key={nanoid()}>{speciality}</li>
              ))}
            </ul>
          </Specialities>
          <Issues>
            <h3>Issues</h3>
            <ul>
              {issues.map(issue => (
                <li key={nanoid()}>{issue}</li>
              ))}
            </ul>
          </Issues>
        </Grid>
      </Wrapper>
    )
  }
  return (
    <Waiting>
      <h2>Select a possible survivor above</h2>
    </Waiting>
  )
}
