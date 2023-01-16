import { Link } from "react-router-dom";
import sprite from "assets/icons.svg";
import logo from "assets/logo.png";
import {
  ArrowDownIcon,
  HeaderContainer,
  Logo,
  Nav,
  NavList,
  OptionsBtn,
  OptionsIcon,
  PriceBtn,
  SearchContainer,
  SearchIcon,
  SearchInput,
  StyledHeader,
  StyledLink,
} from "./Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <HeaderContainer>
        <Link to="/">
          <Logo src={logo} alt="logo" />
        </Link>
        <SearchContainer>
          <SearchInput type="text" placeholder="Enter an app name..." />
          <SearchIcon>
            <use href={`${sprite}#icon-search`} />
          </SearchIcon>
        </SearchContainer>
        <OptionsBtn>
          <OptionsIcon>
            <use href={`${sprite}#icon-options`} />
          </OptionsIcon>
        </OptionsBtn>
        <PriceBtn>
          Price
          <ArrowDownIcon>
            <use href={`${sprite}#icon-arrow-down`} />
          </ArrowDownIcon>
        </PriceBtn>
        <Nav>
          <NavList>
            <li>
              <StyledLink to="/">Search</StyledLink>
            </li>
            <li>
              <StyledLink to="/favorites">Like list</StyledLink>
            </li>
          </NavList>
        </Nav>
      </HeaderContainer>
    </StyledHeader>
  );
};

export { Header };
