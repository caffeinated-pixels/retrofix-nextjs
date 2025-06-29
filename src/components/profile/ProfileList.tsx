import {
  Avatar,
  ListItem,
  Name,
  NavButton,
  ProfileListContainer,
} from '@/components/profile/styled'

const AVATAR_NAMES = [
  'Brigand',
  'Gentleman',
  'Mercenary',
  'Navvie',
  'Preacher',
  'Thug',
]

type ProfileListProps = {
  handleClick: (id: number) => void
}

export const ProfileList = ({ handleClick }: ProfileListProps) => {
  return (
    <ProfileListContainer>
      {AVATAR_NAMES.map((avatar, index) => (
        <ListItem key={index}>
          <NavButton onClick={() => handleClick(index + 1)}>
            <Avatar $imgUrl={`/images/users/${index + 1}.png`} />
            <Name>
              The <br />
              {avatar}
            </Name>
          </NavButton>
        </ListItem>
      ))}
    </ProfileListContainer>
  )
}
