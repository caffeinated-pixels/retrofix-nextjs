'use client'
import { FullPageBackground } from '@/components/shared/full-page-background/FullPageBackground'

const imageUrl = '/images/misc/no-more-table.jpg'
const title = `No more website! \n Where you going, pal?!`

const message =
  "Next time you have the chance to visit RetroFix, don't hesitate!"

export default function PageNotFound() {
  return (
    <FullPageBackground imageUrl={imageUrl} title={title} message={message} />
  )
}
