import React, { useState } from 'react';
import { useClickOutside } from 'hooks/useOutsideClick';
import { PRICE, PUBLISH_DATE, SortKey } from 'types/types';
import { setSortKey } from 'redux/games/gamesSlice';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import sprite from 'assets/icons.svg';
import * as S from './SortKeys.styled';

const SortKeys = (): JSX.Element => {
  const sortKey = useAppSelector(state => state.games.sortKey);
  const dispatch = useAppDispatch();
  const [isPriceMenuOpen, setIsPriceMenuOpen] = useState(false);

  const priceMenuRef = useClickOutside<HTMLDivElement>(
    onClickPrice,
    isPriceMenuOpen
  );

  function onClickPrice(): void {
    setIsPriceMenuOpen(state => !state);
  }

  const onClickSetSort: React.MouseEventHandler<HTMLButtonElement> = e => {
    const target = e.currentTarget as HTMLElement;
    dispatch(setSortKey(target.dataset.value as SortKey));
    onClickPrice();
  };

  return (
    <S.PriceContainer ref={priceMenuRef}>
      <S.PriceBtn onClick={onClickPrice}>
        {sortKey}
        <S.ArrowDownIcon isPriceMenuOpen={isPriceMenuOpen}>
          <use href={`${sprite}#icon-arrow-down`} />
        </S.ArrowDownIcon>
      </S.PriceBtn>
      <S.PriceSubmenu isOpen={isPriceMenuOpen}>
        <li>
          <S.PriceSubmenuBtn
            data-value={PRICE}
            onClick={onClickSetSort}
            isActive={sortKey === PRICE}
          >
            <span>{PRICE}</span>
            <S.PriceIcon>
              <use href={`${sprite}#icon-pricetags`} />
            </S.PriceIcon>
          </S.PriceSubmenuBtn>
        </li>
        <li>
          <S.PublishDateBtn
            data-value={PUBLISH_DATE}
            onClick={onClickSetSort}
            isActive={sortKey === PUBLISH_DATE}
          >
            <span>{PUBLISH_DATE}</span>
            <S.PriceIcon>
              <use href={`${sprite}#icon-browser`} />
            </S.PriceIcon>
          </S.PublishDateBtn>
        </li>
      </S.PriceSubmenu>
    </S.PriceContainer>
  );
};

export default React.memo(SortKeys);
