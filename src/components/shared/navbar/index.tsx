import { NavContainer } from './styled'
import { PropsWithChildren } from 'react'

export const Navbar = ({ children, ...restProps }: PropsWithChildren) => {
  return <NavContainer {...restProps}>{children}</NavContainer>
}
