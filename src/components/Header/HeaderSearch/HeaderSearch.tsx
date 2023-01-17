import { useEffect, useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch } from "hooks/redux-hooks";
import { clearGameList, fetchGamesByKeyword, setSortedGames } from "redux/slises/gamesSlice";
import useDebounce from "hooks/useDebounce";
import sprite from "assets/icons.svg";
import * as S from "../Header.styled";

const HeaderSearch = () => {
  const dispatch = useAppDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState<string>(() => {
    const searchQuery = searchParams.get("query");
    if (searchQuery) {
      return searchQuery;
    }
    return "";
  });

  const debouncedValue = useDebounce<string>(query?.toLowerCase(), 230);

  const onChangeInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setQuery(e.target.value);
  };


  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal
    if (debouncedValue) {
      const fetchParams = {keyword: debouncedValue, signal}
      dispatch(fetchGamesByKeyword(fetchParams));
      return
    }
    return () => {
      if (!debouncedValue) {
        controller.abort();
      }
    };
  }, [debouncedValue]);

  useEffect(() => {
    dispatch(setSortedGames());
    if (query) {
      setSearchParams({ query });
      return
    }
    searchParams.delete("query");
    setSearchParams(searchParams);
    dispatch(clearGameList());
  }, [query]);


  return(
    <S.SearchContainer>
    <S.SearchInput
      type="text"
      placeholder="Enter an app name..."
      value={query}
      onChange={onChangeInput}
    />
    <S.SearchIcon>
      <use href={`${sprite}#icon-search`} />
    </S.SearchIcon>
  </S.SearchContainer>
  );
};

export { HeaderSearch }