import styled from 'styled-components'

export const DropDownWrapper = styled.div`
  position: relative;

  display: flex;
  align-items: center;
`
export const AvatarWrapper = styled.div`
  position: relative;
`

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 4px;
`

type CalloutIconProps = {
  $isDropDownOpen: boolean
}

export const CalloutIcon = styled.i<CalloutIconProps>`
  display: ${({ $isDropDownOpen }) => ($isDropDownOpen ? 'flex' : 'none')};
  position: absolute;
  width: 200%;
  height: 175%;
  top: 0;
  left: -50%;

  line-height: 1.5;
  text-align: center;
  font-size: 1.2rem;

  justify-content: center;
  align-items: flex-end;
`

export const DropDownIcon = styled.i`
  margin-left: 10px;
`

export const SubMenuContainer = styled.div`
  position: absolute;
  right: 0;
  top: 52px;
  width: 181px;

  font-size: 0.8125rem;
  background-color: hsla(0, 0%, 0%, 0.9);
  border: solid 1px hsla(0, 0%, 100%, 0.15);
`

export const SubMenuList = styled.ul`
  list-style: none;
  padding: 10px 0 5px;

  & + & {
    border-top: solid 1px hsla(0, 0%, 100%, 0.25);
  }
`
export const SubMenuItem = styled.li`
  padding: 5px 10px;
`

export const SubMenuBtn = styled.button`
  border: 0;
  cursor: pointer;

  background: transparent;
  color: inherit;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover > span {
    text-decoration: underline;
  }
`
export const TextSpan = styled.span``

export const EditIcon = styled.i``
