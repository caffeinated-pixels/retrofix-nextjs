import { useEffect, useState } from 'react'

/**
 * returns a boolean indicating whether the component has mounted.
 * @returns {boolean} `true` if the component has mounted
 */
export const useMounted = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return mounted
}
