import { useCallback } from 'react'

interface SeeMoreProps {
  name: string
  setSelected: React.Dispatch<React.SetStateAction<string>>
  thisSelected: boolean
}

export default function SeeMore({
  setSelected,
  name,
  thisSelected,
}: SeeMoreProps) {
  const handleClick = useCallback(() => {
    setSelected(thisSelected ? '' : name)
  }, [setSelected, name, thisSelected])

  return (
    <button onClick={handleClick}>
      {thisSelected ? 'See less' : 'See More'}
    </button>
  )
}
