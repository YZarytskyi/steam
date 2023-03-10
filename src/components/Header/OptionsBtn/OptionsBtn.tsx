import { useClickOutside } from 'hooks/useOutsideClick';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { setSortFromLower } from 'redux/games/gamesSlice';
import sprite from 'assets/icons.svg';
import * as S from './OptionsBtn.styled';

const OptionsBtn = (): JSX.Element => {
  const sortFromLower = useAppSelector(state => state.games.sortFromLower);
  const dispatch = useAppDispatch();
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  const optionsRef = useClickOutside<HTMLDivElement>(
    onClickOptions,
    isOptionsOpen
  );

  function onClickOptions(): void {
    setIsOptionsOpen(state => !state);
  }

  const onClickSetSort: React.MouseEventHandler<HTMLButtonElement> = e => {
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
          <S.ToBiggerBtn
            data-fromlower="true"
            onClick={onClickSetSort}
            isActive={sortFromLower}
          >
            Lower to bigger
          </S.ToBiggerBtn>
        </li>
        <li>
          <S.ToLowerBtn
            data-fromlower="false"
            onClick={onClickSetSort}
            isActive={!sortFromLower}
          >
            Bigger to lower
          </S.ToLowerBtn>
        </li>
      </S.OptionsSubmenu>
    </S.OptionsContainer>
  );
};

export default React.memo(OptionsBtn)