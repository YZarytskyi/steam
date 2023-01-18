import styled from "styled-components";

export const OptionsContainer = styled.div`
  position: relative;
  margin-right: 13px;
  @media screen and (max-width: 1170px){
    margin-right: 0;
  }
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

interface ButtonsProps {
  isActive: boolean;
}

export const ToBiggerBtn = styled.button<ButtonsProps>`
  font-weight: ${({isActive}) => isActive && 600};
`;

export const ToLowerBtn = styled.button<ButtonsProps>`
  font-weight: ${({isActive}) => isActive && 600};
`;