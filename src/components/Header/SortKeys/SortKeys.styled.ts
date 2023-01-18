import styled from "styled-components";

export const PriceContainer = styled.div`
  position: relative;
  margin-right: 15px;
  @media screen and (max-width: 1170px){
    margin-right: 6px;
    width: 100%;
  }
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
  overflow: hidden;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    visibility 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const PriceBtn = styled.button`
  min-width: 189px;
  height: 36px;
  width: 100%;
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


interface ButtonsProps {
  isActive: boolean;
}

export const PriceSubmenuBtn = styled.button<ButtonsProps>`
  width: 100%;
  padding: 7px 18px 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: ${({isActive}) => isActive && 600};
`;

export const PublishDateBtn = styled.button<ButtonsProps>`
  width: 100%;
  padding: 2px 18px 7px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: ${({isActive}) => isActive && 600};
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