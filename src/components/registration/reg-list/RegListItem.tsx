import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { PropsWithChildren } from 'react'

import { ListItem, StyledIcon } from './styled'

type RegListItemProps = PropsWithChildren<{
  planform?: boolean
}>

export function RegListItem({ children, planform }: RegListItemProps) {
  return (
    <ListItem $planform={planform}>
      <StyledIcon icon={faCheck} $planform={planform} />
      {children}
    </ListItem>
  )
}
