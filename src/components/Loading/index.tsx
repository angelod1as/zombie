import { Wrapper } from './style'
import brain from './brain.svg'

export default function Loading() {
  return (
    <Wrapper>
      <h1>Loading...</h1>
      <img src={brain} alt="" />
    </Wrapper>
  )
}
