import { useState } from "react";
import { PaginationGames } from "../../components/Pagination/Pagination";
import { useAppSelector } from "../../hooks/redux-hooks";
import { GameCard } from "../Home/GameCard";
import * as S from "./Favorites.styled";

const Favorites = () => {
  const favoriteGames = useAppSelector((state) => state.games.favoriteGames);
  const [currentPage, setCurrentPage] = useState<number>(1);

  return (
    <S.FavoritesSection>
      <S.FavoritesContainer>
        <S.GamesList>
          {favoriteGames.slice(0, 4).map((game) => (
            <GameCard key={game.appId} game={game} />
          ))}
        </S.GamesList>
        {favoriteGames.length > 4 && (
          <PaginationGames
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </S.FavoritesContainer>
    </S.FavoritesSection>
  );
};

export default Favorites;
