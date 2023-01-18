import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { OptionsBtn } from './OptionsBtn/OptionsBtn';
import { SortKeys } from './SortKeys/SortKeys';
import { HeaderSearch } from './HeaderSearch/HeaderSearch';
import { useAppDispatch } from 'hooks/redux-hooks';
import { Nav } from './Nav/Nav';
import { clearGameList } from 'redux/games/gamesSlice';
import logo from 'assets/logo.png';
import * as S from './Header.styled';

const Header = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState<string>(() => {
    const searchQuery = searchParams.get('query');
    return searchQuery?.toLowerCase() || '';
  });

  useEffect(() => {
    if (query) {
      searchParams.set('query', query.trim().toLowerCase());
      setSearchParams(searchParams);
      return;
    }
    searchParams.delete('query');
    setSearchParams(searchParams);
    dispatch(clearGameList());
  }, [query]);

  const setNewQuery = (query: string) => {
    setQuery(query);
  };

  return (
    <S.StyledHeader>
      <S.HeaderPCContainer>
        <Link to="/">
          <S.Logo src={logo} alt="logo" />
        </Link>
        <HeaderSearch query={query} setNewQuery={setNewQuery} />
        <OptionsBtn />
        <SortKeys />
        <Nav setNewQuery={setNewQuery} />
      </S.HeaderPCContainer>

      <S.HeaderMobileContainer>
        <S.LogoNavContainer>
          <Link to="/">
            <S.Logo src={logo} alt="logo" />
          </Link>
          <Nav setNewQuery={setNewQuery} />
        </S.LogoNavContainer>
        <HeaderSearch query={query} setNewQuery={setNewQuery} />
        <S.PriceOptionsContainer>
          <SortKeys />
          <OptionsBtn />
        </S.PriceOptionsContainer>
      </S.HeaderMobileContainer>
    </S.StyledHeader>
  );
};

export { Header };
