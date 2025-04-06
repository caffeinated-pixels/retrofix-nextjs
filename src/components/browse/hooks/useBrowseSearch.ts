import { useRouter } from 'next/navigation'

import { SEARCH } from '@/constants/routes'
import { sanitizeSearchInput } from '@/helpers/sanitizeSearchInput'

export const useBrowseSearch = () => {
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchInput = sanitizeSearchInput(e.target.value)

    if (searchInput.length > 0)
      router.push(`${SEARCH}?q=${encodeURIComponent(searchInput)}`)
  }

  return { handleSubmit, handleSearchInput }
}
