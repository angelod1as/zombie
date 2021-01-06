import { Wrapper } from './style'

interface ErrorProps {
  error: any
}

export default function Error({ error }: ErrorProps) {
  console.warn(error)

  return <Wrapper>Ocorreu um erro, tente novamente mais tarde</Wrapper>
}
