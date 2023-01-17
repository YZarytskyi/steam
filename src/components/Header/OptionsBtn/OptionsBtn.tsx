import { useClickOutside } from "hooks/useOutsideClick";
import sprite from "assets/icons.svg";
import * as S from "../Header.styled";

interface OptionsBtnProps {
  isOptionsOpen: boolean;
  onClickSetSortToLower: (boolean: boolean) => void;
  onClickOptions: () => void;
}

export const OptionsBtn = ({
  isOptionsOpen,
  onClickSetSortToLower,
  onClickOptions,
}: OptionsBtnProps): JSX.Element => {

  const optionsRef = useClickOutside<HTMLDivElement>(
    onClickOptions,
    isOptionsOpen
  );

  const onClickSetSort: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    onClickOptions()
    const target = e.currentTarget as HTMLElement;
    if (target.dataset.toLower) {
      onClickSetSortToLower(true)
      return
    }
    onClickSetSortToLower(false)
  }

  return (
    <S.OptionsContainer ref={optionsRef}>
      <S.OptionsBtn onClick={onClickOptions}>
        <S.OptionsIcon>
          <use href={`${sprite}#icon-options`} />
        </S.OptionsIcon>
      </S.OptionsBtn>
      <S.OptionsSubmenu isOpen={isOptionsOpen}>
        <li>
          <button data-toLower={false} onClick={onClickSetSort}>Lower to bigger</button>
        </li>
        <li>
          <button data-toLower={true} onClick={onClickSetSort}>Bigger to lower</button>
        </li>
      </S.OptionsSubmenu>
    </S.OptionsContainer>
  );
};
