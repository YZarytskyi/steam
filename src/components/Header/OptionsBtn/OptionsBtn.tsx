import { useClickOutside } from "hooks/useOutsideClick";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "hooks/redux-hooks";
import {
  setSortedGames,
  setSortFromLower,
} from "redux/slises/gamesSlice";
import sprite from "assets/icons.svg";
import * as S from "./OptionsBtn.styled";
import { useLocation } from "react-router-dom";

export const OptionsBtn = (): JSX.Element => {
  const location = useLocation();
  const sortFromLower = useAppSelector((state) => state.games.sortFromLower);
  const dispatch = useAppDispatch();
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  useEffect(() => {
    dispatch(setSortedGames(location.pathname));
  }, [sortFromLower]);

  const optionsRef = useClickOutside<HTMLDivElement>(
    onClickOptions,
    isOptionsOpen
  );

  function onClickOptions(): void {
    setIsOptionsOpen((state) => !state);
  }

  const onClickSetSort: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    onClickOptions();
    const target = e.currentTarget as HTMLElement;
    if (target.dataset.fromlower === 'true') {
      dispatch(setSortFromLower(true));
      return;
    }
    dispatch(setSortFromLower(false));
  };

  return (
    <S.OptionsContainer ref={optionsRef}>
      <S.OptionsBtn onClick={onClickOptions}>
        <S.OptionsIcon>
          <use href={`${sprite}#icon-options`} />
        </S.OptionsIcon>
      </S.OptionsBtn>
      <S.OptionsSubmenu isOpen={isOptionsOpen}>
        <li>
          <S.ToBiggerBtn data-fromlower='true' onClick={onClickSetSort} isActive={sortFromLower}>
            Lower to bigger
          </S.ToBiggerBtn>
        </li>
        <li>
          <S.ToLowerBtn data-fromlower='false' onClick={onClickSetSort} isActive={!sortFromLower}>
            Bigger to lower
          </S.ToLowerBtn>
        </li>
      </S.OptionsSubmenu>
    </S.OptionsContainer>
  );
};
