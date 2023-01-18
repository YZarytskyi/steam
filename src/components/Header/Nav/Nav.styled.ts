import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 11px 17.5px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  overflow: hidden;
  @media screen and (max-width: 1170px) {
    padding: 8px 16px;
  }
`;

export const NavList = styled.ul`
  height: 100%;
  display: flex;
  gap: 17px;
  align-items: center;
  font-size: 12px;
  line-height: calc(15 / 12);
`;

export const StyledLink = styled(NavLink)`
  height: 100%;
  color: ${({ theme }) => theme.colors.font};
  &.active {
    font-weight: 600;
  }
`;