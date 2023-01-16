import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const StyledHeader = styled.header`
  padding: 33px 0;
`
export const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 1171px;
  padding: 0 13px;
  display: flex;
  align-items: center;
`

export const Logo = styled.img`
  width: 150px;
  height: 35px;
`

export const SearchContainer = styled.div`
  position: relative;
  margin-right: 12px;
  min-width: 595px;
`

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px 15px;
  background-color: ${({theme}) => theme.colors.primary};
  border-radius: 10px;
  color: ${({theme}) => theme.colors.font};
  &::placeholder {
    color: inherit;
    font-size: 12px;
    line-height: calc(15/12);
  }
`

export const SearchIcon = styled.svg`
  position: absolute;
  top: 6px;
  right: 12px;
  width: 23px;
  height: 23px;
`

export const OptionsBtn = styled.button`
  width: 37px;
  height: 36px;
  margin-right: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.primary};
  border-radius: 10px;
`

export const OptionsIcon = styled.svg`
  width: 32.5px;
  height: 32.5px;
  fill: ${({theme}) => theme.colors.icons.secondary};
`

export const PriceBtn = styled.button`
  position: relative;
  min-width: 189px;
  height: 36px;
  margin-right: 15px;
  padding: 0 18px;
  display: flex;
  justify-content: left;
  align-items: center;
  background-color: ${({theme}) => theme.colors.primary};
  color: ${({theme}) => theme.colors.font};
  border-radius: 10px;
`

export const ArrowDownIcon = styled.svg`
  position: absolute;
  top: 3px;
  right: 11px;
  width: 28px;
  height: 30px;
  fill: ${({theme}) => theme.colors.icons.secondary};
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 11px 17.5px;
  background-color: ${({theme}) => theme.colors.primary};
  border-radius: 10px;
  overflow: hidden;
`

export const NavList = styled.ul`
  height: 100%;
  display: flex;
  gap: 17px;
  align-items: center;
  font-size: 12px;
  line-height: calc(15/12);
`

export const StyledLink = styled(Link)`
  height: 100%;
  color: ${({theme}) => theme.colors.font};
`