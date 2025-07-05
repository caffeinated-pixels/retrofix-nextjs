import { Footer } from '@/components/shared/footer'
import { colors } from '@/constants/theme'
import { footerHomeRegistration } from '@/fixtures/footer-content'

export const RegistrationFooter = () => {
  return (
    <Footer
      footerContent={footerHomeRegistration}
      bgColor={colors.bgLightGrey}
      textColor={colors.textDarkGrey}
      borderTop={colors.borderLightGrey}
    />
  )
}
