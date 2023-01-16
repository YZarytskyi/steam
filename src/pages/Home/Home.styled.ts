import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomeContainer = styled.div`
  margin: 0 auto;
  max-width: 1171px;
  padding: 24px 27px 14px;
`;

export const GamesList = styled.ul`
  display: flex;
  gap: 21px;
`;

export const GameItem = styled.li`
  position: relative;
  width: calc((100% - 54px) / 4);
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 10px;
`;

export const GameImage = styled.img`
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

export const HeartIcon = styled.svg`
  position: absolute;
  right: 12.6px;
  bottom: 7.3px;
  width: 23.4px;
  height: 20.7px;
`;
