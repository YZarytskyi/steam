import { useEffect, useState } from 'react';
import { PaginationGames } from '../Pagination/Pagination';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { GameCard } from '../GameCard/GameCard';
import { paginationSliceItems } from 'utils/paginationSliceItems';
import { setSortedGames } from 'redux/games/gamesSlice';
import { useLocation } from 'react-router-dom';
import * as S from './Favorites.styled';

const Favorites = (): JSX.Element => {
  const location = useLocation();
  const { filteredFavorites, favoriteGames, sortFromLower, sortKey } =
    useAppSelector(state => state.games);
  const dispatch = useAppDispatch();
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [fromGameItem, toGameItem] = paginationSliceItems(
    currentPage,
    filteredFavorites.length
  );

  const filteredGames = filteredFavorites.slice(fromGameItem, toGameItem);

  useEffect(() => {
    dispatch(setSortedGames(location.pathname));
    setCurrentPage(1);
  }, [favoriteGames, sortFromLower, sortKey]);

  if (!filteredFavorites.length) {
    return (
      <S.FavoritesSection>
        <S.FavoritesContainer>
          <p>Games not Found</p>
        </S.FavoritesContainer>
      </S.FavoritesSection>
    );
  }

  return (
    <S.FavoritesSection>
      <S.FavoritesContainer>
        <S.GamesList>
          {filteredGames.slice(0, 4).map(game => (
            <GameCard key={game.appId} game={game} />
          ))}
        </S.GamesList>
        {filteredFavorites.length > 4 && (
          <PaginationGames
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            items={filteredFavorites}
          />
        )}
      </S.FavoritesContainer>
    </S.FavoritesSection>
  );
};

export default Favorites;
