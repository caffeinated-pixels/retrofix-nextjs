import { PropsWithChildren } from 'react'

import { NavContainer } from './styled'

export const Navbar = ({ children, ...restProps }: PropsWithChildren) => {
  return <NavContainer {...restProps}>{children}</NavContainer>
}
