import { Link } from "react-router-dom";
import { OptionsBtn } from "./OptionsBtn/OptionsBtn";
import { PriceBtn } from "./PriceBtn/PriceBtn";
import { HeaderSearch } from "./HeaderSearch/HeaderSearch";
import logo from "assets/logo.png";
import * as S from "./Header.styled";

const Header = () => {
  return (
    <S.StyledHeader>
      <S.HeaderContainer>
        <Link to="/">
          <S.Logo src={logo} alt="logo" />
        </Link>

        <HeaderSearch />
        <OptionsBtn />
        <PriceBtn />

        <S.Nav>
          <S.NavList>
            <li>
              <S.StyledLink to="/">Search</S.StyledLink>
            </li>
            <li>
              <S.StyledLink to="/favorites">Like list</S.StyledLink>
            </li>
          </S.NavList>
        </S.Nav>
      </S.HeaderContainer>
    </S.StyledHeader>
  );
};

export { Header };
