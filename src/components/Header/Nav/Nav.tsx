import * as S from './Nav.styled';

interface NavProps {
  setNewQuery: (query: string) => void;
}

const Nav = ({ setNewQuery }: NavProps): JSX.Element => {
  const onClickLink = () => {
    setNewQuery('');
  };

  return (
    <S.Nav>
      <S.NavList>
        <li>
          <S.StyledLink to="/" onClick={onClickLink}>
            Search
          </S.StyledLink>
        </li>
        <li>
          <S.StyledLink to="/favorites" onClick={onClickLink}>
            Like list
          </S.StyledLink>
        </li>
      </S.NavList>
    </S.Nav>
  );
};

export { Nav };
