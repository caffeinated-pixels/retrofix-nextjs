import { useRouter } from 'next/navigation'

import { SEARCH } from '@/constants/routes'

export const useBrowseSearch = () => {
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchInput = e.target.value.trim()

    if (searchInput.length > 0) router.push(`${SEARCH}?q=${searchInput}`)
  }

  return { handleSubmit, handleSearchInput }
}
