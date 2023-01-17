import { useClickOutside } from "hooks/useOutsideClick";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "hooks/redux-hooks";
import {
  setSortedGames,
  setSortFromLower,
} from "../../../redux/slises/gamesSlice";
import sprite from "assets/icons.svg";
import * as S from "../Header.styled";

export const OptionsBtn = (): JSX.Element => {
  const sortFromLower = useAppSelector((state) => state.games.sortFromLower);
  const dispatch = useAppDispatch();
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  useEffect(() => {
    dispatch(setSortedGames());
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
          <button data-fromlower='true' onClick={onClickSetSort}>
            Lower to bigger
          </button>
        </li>
        <li>
          <button data-fromlower='false' onClick={onClickSetSort}>
            Bigger to lower
          </button>
        </li>
      </S.OptionsSubmenu>
    </S.OptionsContainer>
  );
};
