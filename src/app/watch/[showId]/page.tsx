'use client'
import { VideoPlayer } from '@/components/watch/video-player/styled'

type WatchPageProps = {
  params: {
    showId: string
  }
}

export default function WatchPage({ params }: WatchPageProps) {
  const { showId } = params

  return (
    <VideoPlayer
      controls
      src='/videos/chaos-engine.mp4'
      poster='/images/misc/chaos-engine.png'
      autoPlay
    >
      Sorry, your browser doesn&apos;t support embedded videos.
    </VideoPlayer>
  )
}
