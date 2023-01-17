import React from "react";
import Pagination from "react-js-pagination";
import { useAppSelector } from "../../hooks/redux-hooks";
import * as S from "./Pagination.styled";

interface PaginationProps {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

export const PaginationGames = ({currentPage, setCurrentPage}: PaginationProps): JSX.Element => {
  const games = useAppSelector((state) => state.games.games);

  return (
    <S.StyledPaginateContainer>
      <Pagination
          activePage={currentPage}
          itemsCountPerPage={4}
          totalItemsCount={games.length}
          pageRangeDisplayed={3}
          innerClass='pagination'
          itemClassPrev='previous'
          itemClassNext='next'
          itemClass="link"
          activeLinkClass="active"
          hideFirstLastPages={true}
          onChange={(number: number) => setCurrentPage(number)}
      />
    </S.StyledPaginateContainer>
  );
}
