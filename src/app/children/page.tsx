'use client'
import { FullPageBackground } from '@/components/shared/full-page-background/FullPageBackground'

const imageUrl = '/images/films/horror/Halloween/large.jpg'
const title = 'No kids profiles!'
const message =
  'Children are as evil as pineapple on a pizza, so RetroFix is a no-kids zone!'

export default function Children() {
  return (
    <FullPageBackground imageUrl={imageUrl} title={title} message={message} />
  )
}
