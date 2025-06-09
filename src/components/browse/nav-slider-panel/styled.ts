import styled from 'styled-components'

import { colors, navSliderBorderBottom } from '@/constants/theme'

type NavSliderBackgroundProps = {
  $isMenuOpen: boolean
}

export const NavSliderBackground = styled.div<NavSliderBackgroundProps>`
  position: fixed;
  width: 100%;
  top: 50px;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: ${({ $isMenuOpen }) => ($isMenuOpen ? 'block' : 'none')};
`

type NavSliderProps = {
  $isMenuOpen: boolean
}

export const NavSlider = styled.div<NavSliderProps>`
  position: fixed;
  width: 250px;
  top: 50px;
  bottom: 0;
  left: 0;
  transform: ${({ $isMenuOpen }) =>
    $isMenuOpen ? 'translateX(0)' : 'translateX(-250px)'};
  transition: transform 150ms cubic-bezier(0.5, 0, 0.1, 1);

  background-color: #000;
  z-index: 99;
  color: ${colors.textLightGrey};
  font-weight: 700;
`

export const NavPrimary = styled.ul`
  list-style: none;
  padding: 10px 0 10px 20px;
  border-bottom: ${navSliderBorderBottom};
  margin-bottom: 5px;
`
export const NavSecondary = styled.ul`
  list-style: none;
  padding-left: 0;
  line-height: 2;
`

export const NavUserLi = styled.li`
  color: #fff;
  margin-bottom: 10px;
`
export const NavUserTextWrapper = styled.div`
  margin-left: 8px;
`

export const NavUserTextTop = styled.p`
  line-height: 1;
`

export const NavUserTextBottom = styled.p`
  font-size: 0.7rem;
  font-weight: 400;
  line-height: 1;
`

export const UserAvatar = styled.img`
  display: inline-block;
  width: 2em;
  vertical-align: middle;
`

type NavLiProps = {
  $noLeftPadding?: boolean
  $isActive?: boolean
}

export const NavLi = styled.li<NavLiProps>`
  padding-left: ${({ $noLeftPadding }) => ($noLeftPadding ? '0' : '20px')};
  color: ${({ $isActive }) => ($isActive ? 'white' : '')};
  border-left: ${({ $isActive }) =>
    $isActive ? '3px solid #b9090b' : '3px solid #000'};
`

export const NavBtn = styled.button`
  display: flex;
  border: 0;

  width: 100%;
  padding: 0;

  cursor: pointer;

  text-align: left;
  background: none;
  color: ${colors.textLightGrey};

  &:hover,
  &:hover p,
  &:focus-visible,
  &:focus-visible p {
    color: #fff;
  }
`
