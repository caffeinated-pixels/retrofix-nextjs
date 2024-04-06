import { NavContainer } from './styled'
import { ReactNode } from 'react'

export const Navbar = ({ children, ...restProps }: { children: ReactNode }) => {
  return <NavContainer {...restProps}>{children}</NavContainer>
}
