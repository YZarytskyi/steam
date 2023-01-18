import * as S from "./Nav.styled";

const Nav = () => {
  return (
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
  );
};

export { Nav };
