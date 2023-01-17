import { useState, useEffect } from "react";
import sprite from "assets/icons.svg";
import { useClickOutside } from "hooks/useOutsideClick";
import { PRICE, PUBLISH_DATE, SortKey } from "types/types";
import * as S from "../Header.styled";
import { setSortedGames, setSortKey } from "redux/slises/gamesSlice";
import { useAppDispatch, useAppSelector } from "hooks/redux-hooks";


export const PriceBtn = (): JSX.Element => {
  const sortKey = useAppSelector(state => state.games.sortKey)
  const dispatch = useAppDispatch();
  const [isPriceMenuOpen, setIsPriceMenuOpen] = useState(false);

  const priceMenuRef = useClickOutside<HTMLDivElement>(
    onClickPrice,
    isPriceMenuOpen
  );

  function onClickPrice(): void {
    setIsPriceMenuOpen((state) => !state);
  };

  const onClickSetSort: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    const target = e.currentTarget as HTMLElement;
    dispatch(setSortKey(target.dataset.value as SortKey));
    onClickPrice();
  };

  useEffect(() => {
    dispatch(setSortedGames());
  }, [sortKey]);

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
          <S.PriceSubmenuBtn data-value={PRICE} onClick={onClickSetSort}>
            <span>{PRICE}</span>
            <S.PriceIcon>
              <use href={`${sprite}#icon-pricetags`} />
            </S.PriceIcon>
          </S.PriceSubmenuBtn>
        </li>
        <li>
          <S.PublishDateBtn data-value={PUBLISH_DATE} onClick={onClickSetSort}>
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
