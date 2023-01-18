import styled from "styled-components";

export const SearchContainer = styled.div`
  position: relative;
  margin-right: 12px;
  min-width: 595px;
  @media screen and (max-width: 1170px){
    width: 100%;
    margin-bottom: 8px;
    min-width: unset;
    margin-right: 0;
  }
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
    @media screen and (max-width: 1170px){
      font-size: 14px;
      line-height: calc(17 / 14);
    }
  }
`;

export const SearchIcon = styled.svg`
  position: absolute;
  top: 6px;
  right: 12px;
  width: 23px;
  height: 23px;
`;