import { useEffect, useState } from 'react';
import { PaginationGames } from 'components/Pagination/Pagination';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { GameCard } from '../GameCard/GameCard';
import { Spinner } from '../Spinner/Spinner';
import { paginationSliceItems } from 'utils/paginationSliceItems';
import { useLocation, useSearchParams } from 'react-router-dom';
import { setSortedGames } from 'redux/games/gamesSlice';
import { GamesList, HomeContainer, HomeSection } from './Home.styled';

const Home = (): JSX.Element => {
  const location = useLocation();
  const { games, isLoading, sortKey, sortFromLower } = useAppSelector(
    state => state.games
  );
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState<number>(() => {
    const page = Number(searchParams.get('page'));
    return page || 1;
  });

  useEffect(() => {
    if (currentPage !== 1) {
      searchParams.set('page', String(currentPage));
      setSearchParams(searchParams);
    }
  }, [currentPage]);

  useEffect(() => {
    dispatch(setSortedGames(location.pathname));
    setCurrentPage(1);
  }, [sortKey, sortFromLower]);

  const [fromGameItem, toGameItem] = paginationSliceItems(
    currentPage,
    games.length
  );

  const filteredGames = games.slice(fromGameItem, toGameItem);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <HomeSection>
      <HomeContainer>
        <GamesList>
          {filteredGames.map(game => (
            <GameCard key={game.appId} game={game} />
          ))}
        </GamesList>
        {games.length > 4 && (
          <PaginationGames
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            items={games}
          />
        )}
      </HomeContainer>
    </HomeSection>
  );
};

export default Home;
