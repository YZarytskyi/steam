import React from "react";
import Pagination from "react-js-pagination";
import { Game } from "types/types";
import sprite from "assets/icons.svg";
import * as S from "./Pagination.styled";

interface PaginationProps {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  items: Array<Game>;
}

export const PaginationGames = ({
  currentPage,
  setCurrentPage,
  items,
}: PaginationProps): JSX.Element => {
  return (
    <S.StyledPaginateContainer>
      <Pagination
        activePage={currentPage}
        itemsCountPerPage={4}
        totalItemsCount={items.length}
        pageRangeDisplayed={3}
        innerClass="pagination"
        itemClassPrev="previous"
        itemClassNext="next"
        itemClass="link"
        activeLinkClass="active"
        hideFirstLastPages={true}
        prevPageText={
          <S.ArrowIcons>
            <use href={`${sprite}#icon-arrow-left`} />
          </S.ArrowIcons>
        }
        nextPageText={
          <S.ArrowIcons>
            <use href={`${sprite}#icon-arrow-right`} />
          </S.ArrowIcons>
        }
        onChange={(number: number) => setCurrentPage(number)}
      />
    </S.StyledPaginateContainer>
  );
};
