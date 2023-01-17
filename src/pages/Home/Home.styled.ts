import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomeSection = styled.section`
  padding: 24px 27px;
`;

export const HomeContainer = styled.div`
  margin: 0 auto;
  max-width: 1171px;
  padding: 0 26px;
`;

export const GamesList = styled.ul`
  display: flex;
  gap: 21px;
  margin-bottom: 30px;
`;

export const GameItem = styled.li`
  position: relative;
  width: calc((100% - 54px) / 4);
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 10px;
`;

export const GameLink = styled(Link)`
`;

export const GameImage = styled.img`
  width: 100%;
  height: 99px;
  margin-bottom: 6px;
  object-fit: cover;
  border-radius: 10px;
`;

export const GameTitle = styled.h2`
  margin-left: 11px;
  margin-bottom: 6px;
  font-weight: 400;
  font-size: 18px;
  line-height: calc(22 / 18);
`;

export const GameDate = styled.p`
  margin-left: 11px;
  margin-bottom: 5px;
  font-size: 15px;
  line-height: calc(18 / 15);
`;

export const GamePrice = styled.p`
  margin-left: 11px;
  margin-bottom: 11px;
  font-size: 14px;
  line-height: calc(17 / 14);
`;

interface IconsProps {
  isSelected: boolean;
}

export const HeartIcon = styled.svg<IconsProps>`
  position: absolute;
  right: 12.6px;
  bottom: 7.3px;
  width: 25px;
  height: 25px;
  cursor: pointer;
  stroke-width: 3px;
  stroke: ${({isSelected}) => isSelected ? '#DD1717' : '#FFFFFF'};
  fill: ${({isSelected}) => isSelected ? '#DD1717' : 'transparent'};
  transition: stroke 200ms cubic-bezier(0.39, 0.575, 0.565, 1),
    fill 200ms cubic-bezier(0.39, 0.575, 0.565, 1);
`;

export const PlayIconContainer = styled.div<IconsProps>`
  position: absolute;
  top: 76px;
  right: 17px;
  width: 47px;
  height: 43px;
  visibility: ${({isSelected}) => isSelected ? 'visible' : 'hidden'};
  opacity: ${({isSelected}) => isSelected ? 1 : 0};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  cursor: pointer;
  background-color: ${({theme}) => theme.colors.primary};
  transition: visibility 200ms cubic-bezier(0.39, 0.575, 0.565, 1),
    opacity 200ms cubic-bezier(0.39, 0.575, 0.565, 1);
`;

export const PlayIcon = styled.svg`
  width: 43px;
  height: 43px;
  cursor: pointer;
`;