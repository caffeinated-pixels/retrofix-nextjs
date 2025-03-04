import { WATCH } from '@/constants/routes'
import { MediaItem } from '@/types/mediaContent'
import { useRouter } from 'next/navigation'

export const useNavigateToWatch = (show: MediaItem | null) => {
  const router = useRouter()

  const handlePlay = () => {
    if (show) {
      router.push(`${WATCH}/${show.id}`)
    }
  }

  return handlePlay
}
