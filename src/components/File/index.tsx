import { nanoid } from 'nanoid'
import { SurvivorProps } from '../Survivor'
import { Wrapper, Grid, Infected, Issues, Specialities } from './style'

interface FileProps {
  selectedSurvivor: SurvivorProps | undefined
  setInfected: (name: string) => void
}

export default function File({ selectedSurvivor, setInfected }: FileProps) {
  if (selectedSurvivor) {
    const { name, photo, specialities, issues, infected } = selectedSurvivor
    return (
      <Wrapper>
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
      </Wrapper>
    )
  }
  return <div>NADA SELECIONADo</div>
}
