import { useState } from "react";
import { PaginationGames } from "components/Pagination/Pagination";
import { useAppSelector } from "hooks/redux-hooks";
import { GameCard } from "./GameCard";
import { GamesList, HomeContainer, HomeSection } from "./Home.styled";
import { Spinner } from "../../components/Spinner/Spinner";

const Home = () => {
  const { games, isLoading } = useAppSelector((state) => state.games);
  const [currentPage, setCurrentPage] = useState<number>(1);

  if (isLoading) {
    return <Spinner />
  }

  return (
    <HomeSection>
      <HomeContainer>
        <GamesList>
          {games.slice(0, 4).map((game) => (
            <GameCard key={game.appId} game={game} />
          ))}
        </GamesList>
        {games.length > 4 && (
          <PaginationGames
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </HomeContainer>
    </HomeSection>
  );
};

export default Home;
