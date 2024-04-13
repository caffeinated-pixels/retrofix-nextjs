import { PropsWithChildren } from 'react'
import { StyledLinkButton } from './styled'

type LinkButtonProps = {
  href: string
}

export const LinkButton = ({
  href,
  children,
}: PropsWithChildren<LinkButtonProps>) => {
  return <StyledLinkButton href={href}>{children}</StyledLinkButton>
}
