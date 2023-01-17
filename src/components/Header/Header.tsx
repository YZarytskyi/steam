import React, { useState } from "react";
import { Link } from "react-router-dom";
import { OptionsBtn } from "./OptionsBtn/OptionsBtn";
import { PriceBtn } from "./PriceBtn/PriceBtn";
import { HeaderSearch } from "./HeaderSearch/HeaderSearch";
import logo from "assets/logo.png";
import * as S from "./Header.styled";
import { PRICE, SortKey } from "../../types/types";

const Header = () => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [isPriceMenuOpen, setIsPriceMenuOpen] = useState(false);
  const [sortKey, setSortKey] = useState<SortKey>(PRICE);
  const [sortToLower, setSortToLower] = useState(true);

  const onClickOptions = (): void => {
    setIsOptionsOpen((state) => !state);
  };

  const onClickPrice = (): void => {
    setIsPriceMenuOpen((state) => !state);
  };

  const onClickSetSortKey = (sortKey: SortKey) => {
    setSortKey(sortKey);
  };

  const onClickSetSortToLower = (boolean: boolean) => {
    setSortToLower(boolean);
  };

  return (
    <S.StyledHeader>
      <S.HeaderContainer>
        <Link to="/">
          <S.Logo src={logo} alt="logo" />
        </Link>

        <HeaderSearch />
        <OptionsBtn
          isOptionsOpen={isOptionsOpen}
          onClickSetSortToLower={onClickSetSortToLower}
          onClickOptions={onClickOptions}
        />
        <PriceBtn
          isPriceMenuOpen={isPriceMenuOpen}
          sortKey={sortKey}
          onClickSetSortKey={onClickSetSortKey}
          onClickPrice={onClickPrice}
        />

        <S.Nav>
          <S.NavList>
            <li>
              <S.StyledLink to="/">Search</S.StyledLink>
            </li>
            <li>
              <S.StyledLink to="/favorites">Like list</S.StyledLink>
            </li>
          </S.NavList>
        </S.Nav>
      </S.HeaderContainer>
    </S.StyledHeader>
  );
};

export { Header };
