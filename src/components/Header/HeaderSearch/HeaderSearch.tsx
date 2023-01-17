import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch } from "hooks/redux-hooks";
import { clearGameList, fetchGamesByKeyword } from "redux/slises/gamesSlice";
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

  const debouncedValue = useDebounce<string>(query.toLowerCase(), 250);

  const onChangeInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setQuery(e.target.value);
  };


  useEffect(() => {
    if (query) {
      setSearchParams({ query });
    }
    if (query && debouncedValue) {
      dispatch(fetchGamesByKeyword(debouncedValue));
      return;
    }
    searchParams.delete("query");
    setSearchParams(searchParams);
    dispatch(clearGameList());
  }, [query, debouncedValue]);


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