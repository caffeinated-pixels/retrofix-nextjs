import GetStartedForm from '@/components/shared/get-started-form'
import { FeatureWrapper, Subtitle, Title } from './styled'

export default function HeaderFeature() {
  return (
    <FeatureWrapper>
      <Title>Retrotastic movies, TV shows, and less.</Title>
      <Subtitle>Never watch. Never cancel.</Subtitle>
      <GetStartedForm />
    </FeatureWrapper>
  )
}
