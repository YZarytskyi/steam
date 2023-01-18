import { Link } from "react-router-dom";
import { OptionsBtn } from "./OptionsBtn/OptionsBtn";
import { SortKeys } from "./SortKeys/SortKeys";
import { HeaderSearch } from "./HeaderSearch/HeaderSearch";
import { Nav } from "./Nav/Nav";
import logo from "assets/logo.png";
import * as S from "./Header.styled";

const Header = () => {
  return (
    <S.StyledHeader>
      <S.HeaderPCContainer>
        <Link to="/">
          <S.Logo src={logo} alt="logo" />
        </Link>
        <HeaderSearch />
        <OptionsBtn />
        <SortKeys />
        <Nav />
      </S.HeaderPCContainer>

      <S.HeaderMobileContainer>
        <S.LogoNavContainer>
          <Link to="/">
            <S.Logo src={logo} alt="logo" />
          </Link>
          <Nav />
        </S.LogoNavContainer>
        <HeaderSearch />
        <S.PriceOptionsContainer>
          <SortKeys />
          <OptionsBtn />
        </S.PriceOptionsContainer>
      </S.HeaderMobileContainer>
    </S.StyledHeader>
  );
};

export { Header };
