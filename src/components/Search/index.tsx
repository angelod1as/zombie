import { useCallback } from 'react'
import slugify from 'slugify'
import { Wrapper } from './style'

interface SearchProps {
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

export default function Search({ search, setSearch }: SearchProps) {
  const handleChange = useCallback(
    e => {
      setSearch(e.target.value)
    },
    [setSearch]
  )

  return (
    <Wrapper>
      <label htmlFor="search">Search</label>
      <input
        type="text"
        name="search"
        id="search"
        value={search}
        onChange={handleChange}
      />
    </Wrapper>
  )
}
