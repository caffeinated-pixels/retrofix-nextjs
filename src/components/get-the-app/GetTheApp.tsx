import { faShare } from '@fortawesome/free-solid-svg-icons/faShare'
import { useMemo } from 'react'

import { BROWSE } from '@/constants/routes'
import { useBrowseContext } from '@/context/BrowseContext'

import { SiteLogo } from '../shared/site-logo'
import {
  AppLaunchBox,
  AppLinkButton,
  DetailsContainer,
  Header,
  Info,
  MaturityRating,
  MetadataBox,
  PageContainer,
  ReturnIcon,
  ReturnLinkButton,
  ShowImage,
  ShowInfoBox,
  ShowTitle,
  WatchRetroFix,
} from './styled'

type GetTheAppProps = {
  id: string
}

export const GetTheApp = ({ id }: GetTheAppProps) => {
  const { mediaCollection } = useBrowseContext()

  const show = useMemo(() => {
    const showIndex = mediaCollection.findIndex((show) => show.id === id)
    return mediaCollection[showIndex]
  }, [mediaCollection, id])

  const imgUrl = `/images/${show.category}/${show.genre}/${show.slug}/large.jpg`

  return (
    <PageContainer>
      <Header>
        <SiteLogo isGetTheAppPage />
      </Header>
      <ShowImage $imgUrl={imgUrl}></ShowImage>
      <DetailsContainer>
        <MetadataBox>
          <ShowTitle>{show.title}</ShowTitle>
          <ShowInfoBox>
            <Info>{show.year}</Info>
            <MaturityRating>TV-{show.maturity}</MaturityRating>
            <Info>{show.length}</Info>
          </ShowInfoBox>
        </MetadataBox>
        <AppLaunchBox>
          <WatchRetroFix>Watch RetroFix on your phone or tablet</WatchRetroFix>
          <AppLinkButton href='#'>Get the imaginery app</AppLinkButton>
        </AppLaunchBox>
        <ReturnLinkButton href={BROWSE}>
          <ReturnIcon icon={faShare} />
          Back to Browse Page
        </ReturnLinkButton>
      </DetailsContainer>
    </PageContainer>
  )
}
