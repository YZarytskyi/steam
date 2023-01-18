import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useAppDispatch } from 'hooks/redux-hooks';
import {
  clearGameList,
  fetchGamesByKeyword,
  filterFavorites,
  removeAbortSignal,
  setAbortSignal,
  setSortedGames,
} from 'redux/slises/gamesSlice';
import useDebounce from 'hooks/useDebounce';
import sprite from 'assets/icons.svg';
import * as S from './HeaderSearch.styled';

const HeaderSearch = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState<string>(() => {
    const searchQuery = searchParams.get('query');
    if (searchQuery) {
      return searchQuery;
    }
    return '';
  });

  const debouncedValue = useDebounce<string>(query?.toLowerCase(), 230);

  const onChangeInput: React.ChangeEventHandler<HTMLInputElement> = e => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (location.pathname.includes('favorites')) {
      dispatch(filterFavorites(debouncedValue));
      return;
    }
    if (debouncedValue) {
      dispatch(setSortedGames(location.pathname));
      dispatch(removeAbortSignal());
      dispatch(fetchGamesByKeyword(debouncedValue));
      return;
    }
    dispatch(setAbortSignal());
  }, [debouncedValue]);

  useEffect(() => {
    if (query) {
      setSearchParams({ query });
      return;
    }
    searchParams.delete('query');
    setSearchParams(searchParams);
    dispatch(clearGameList());
  }, [query]);

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
