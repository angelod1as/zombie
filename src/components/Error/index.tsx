import { Wrapper } from './style'

interface ErrorProps {
  error: any
}

export default function Error({ error }: ErrorProps) {
  console.warn(error)

  return (
    <Wrapper>
      <h1>Something went wrong. Contact the developer.</h1>
    </Wrapper>
  )
}
