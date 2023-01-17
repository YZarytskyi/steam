import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 35px 0;
`;
export const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 1171px;
  padding: 0 13px;
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 150px;
  height: 35px;
`;

export const SearchContainer = styled.div`
  position: relative;
  margin-right: 12px;
  min-width: 595px;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px 15px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.font};
  &::placeholder {
    color: inherit;
    font-size: 12px;
    line-height: calc(15 / 12);
  }
`;

export const SearchIcon = styled.svg`
  position: absolute;
  top: 6px;
  right: 12px;
  width: 23px;
  height: 23px;
`;

export const OptionsContainer = styled.div`
  position: relative;
  margin-right: 13px;
`;

export const OptionsBtn = styled.button`
  width: 37px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
`;

export const OptionsIcon = styled.svg`
  width: 32.5px;
  height: 32.5px;
  fill: ${({ theme }) => theme.colors.icons.secondary};
`;

interface OptionsSubmenuProps {
  isOpen: boolean;
}

export const OptionsSubmenu = styled.ul<OptionsSubmenuProps>`
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transform: ${({ isOpen }) =>
    isOpen ? "translate(0, 0)" : "translate(0, 10%)"};

  position: absolute;
  top: calc(100% + 7px);
  right: 0;
  z-index: 10;
  min-width: 144px;
  padding: 6px 16px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.font};
  font-size: 14px;
  line-height: calc(17 / 14);
  border-radius: 10px;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    visibility 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const PriceContainer = styled.div`
  position: relative;
  margin-right: 15px;
`;

interface PriceSubmenuProps {
  isOpen: boolean;
}

export const PriceSubmenu = styled.ul<PriceSubmenuProps>`
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transform: ${({ isOpen }) =>
    isOpen ? "translate(0, 0)" : "translate(0, 10%)"};

  position: absolute;
  top: calc(100% + 7px);
  right: 0;
  z-index: 10;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.font};
  font-size: 14px;
  line-height: calc(17 / 14);
  border-radius: 10px;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    visibility 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const PriceBtn = styled.button`
  min-width: 189px;
  height: 36px;
  padding: 0 18px;
  display: flex;
  justify-content: left;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.font};
  font-size: 14px;
  line-height: calc(17 / 14);
  border-radius: 10px;
`;

export const PriceIcon = styled.svg`
  width: 25.5px;
  height: 25.5px;
  fill: ${({ theme }) => theme.colors.icons.secondary};
`;

export const PriceSubmenuBtn = styled.button`
  width: 100%;
  padding: 7px 18px 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PublishDateBtn = styled.button`
  width: 100%;
  padding: 2px 18px 7px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface ArrowDownIconProps {
  isPriceMenuOpen: boolean;
}

export const ArrowDownIcon = styled.svg<ArrowDownIconProps>`
  position: absolute;
  top: 3px;
  right: 11px;
  width: 28px;
  height: 30px;
  fill: ${({ theme }) => theme.colors.icons.secondary};
  transform: ${({ isPriceMenuOpen }) => isPriceMenuOpen ? 'rotate(-180deg)' : "rotate(0)"};
  transform-origin: center;
  transition: transform 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 11px 17.5px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  overflow: hidden;
`;

export const NavList = styled.ul`
  height: 100%;
  display: flex;
  gap: 17px;
  align-items: center;
  font-size: 12px;
  line-height: calc(15 / 12);
`;

export const StyledLink = styled(Link)`
  height: 100%;
  color: ${({ theme }) => theme.colors.font};
`;
