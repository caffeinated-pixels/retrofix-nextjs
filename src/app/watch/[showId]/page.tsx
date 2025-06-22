'use client'
import { VideoPlayer } from '@/components/watch/video-player/styled'

export default function WatchPage() {
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
