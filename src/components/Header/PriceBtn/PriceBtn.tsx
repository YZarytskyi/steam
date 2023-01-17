import sprite from "assets/icons.svg";
import { useClickOutside } from "../../../hooks/useOutsideClick";
import { PRICE, PUBLISH_DATE, SortKey } from "../../../types/types";
import * as S from "../Header.styled";

interface PriceBtnProps {
  isPriceMenuOpen: boolean;
  sortKey: SortKey;
  onClickSetSortKey: (sortKey: SortKey) => void;
  onClickPrice: () => void;
}

export const PriceBtn = ({
  isPriceMenuOpen,
  sortKey,
  onClickSetSortKey,
  onClickPrice,
}: PriceBtnProps): JSX.Element => {
  const priceMenuRef = useClickOutside<HTMLDivElement>(
    onClickPrice,
    isPriceMenuOpen
  );

  const onClickSetSort: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    const target = e.currentTarget as HTMLElement;
    onClickSetSortKey(target.dataset.value as SortKey);
    onClickPrice();
  };

  return (
    <S.PriceContainer ref={priceMenuRef}>
      <S.PriceBtn onClick={onClickPrice}>
        {sortKey}
        <S.ArrowDownIcon>
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
