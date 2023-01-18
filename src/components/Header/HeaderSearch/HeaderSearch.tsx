import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from 'hooks/redux-hooks';
import {
  filterFavorites,
  removeAbortSignal,
  setAbortSignal,
} from 'redux/games/gamesSlice';
import { fetchGamesByKeyword } from 'redux/games/gamesThunks';
import useDebounce from 'hooks/useDebounce';
import sprite from 'assets/icons.svg';
import * as S from './HeaderSearch.styled';

interface HeaderSearchProps {
  query: string;
  setNewQuery: (query: string) => void;
}

const HeaderSearch = ({
  query,
  setNewQuery,
}: HeaderSearchProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const debouncedValue = useDebounce<string>(query, 230);

  useEffect(() => {
    if (location.pathname.includes('favorites')) {
      dispatch(filterFavorites(debouncedValue));
      return;
    }
    if (debouncedValue) {
      dispatch(removeAbortSignal());
      dispatch(fetchGamesByKeyword(debouncedValue));
      return;
    }
    dispatch(setAbortSignal());
  }, [debouncedValue]);

  const onChangeInput: React.ChangeEventHandler<HTMLInputElement> = e => {
    setNewQuery(e.target.value);
  };

  const placeholder =
  window.innerWidth > 1170 ? 'Enter an app name...' : 'Search';

  return (
    <S.SearchContainer>
      <S.SearchInput
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={onChangeInput}
      />
      <S.SearchIcon>
        <use href={`${sprite}#icon-search`} />
      </S.SearchIcon>
    </S.SearchContainer>
  );
};

export { HeaderSearch };
