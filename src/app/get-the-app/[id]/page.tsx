'use client'

import { GetTheApp } from '@/components/get-the-app/GetTheApp'

interface GetTheAppPageProps {
  params: {
    id: string
  }
}

export default function GetTheAppPage({ params }: GetTheAppPageProps) {
  const { id } = params

  return <GetTheApp id={id} />
}
