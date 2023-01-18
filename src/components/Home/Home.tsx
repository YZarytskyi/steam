import { useState } from "react";
import { PaginationGames } from "components/Pagination/Pagination";
import { useAppSelector } from "hooks/redux-hooks";
import { GameCard } from "../GameCard/GameCard";
import { GamesList, HomeContainer, HomeSection } from "./Home.styled";
import { Spinner } from "../Spinner/Spinner";
import { paginationSliceItems } from "../../utils/paginationSliceItems";

const Home = () => {
  const { games, isLoading } = useAppSelector((state) => state.games);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [fromGameItem, toGameItem] = paginationSliceItems(currentPage, games.length)

  const filteredGames = games.slice(fromGameItem, toGameItem);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <HomeSection>
      <HomeContainer>
        <GamesList>
          {filteredGames.map((game) => (
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
