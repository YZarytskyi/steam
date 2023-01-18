import { useEffect, useState } from "react";
import { PaginationGames } from "../Pagination/Pagination";
import { useAppSelector } from "../../hooks/redux-hooks";
import { GameCard } from "../GameCard/GameCard";
import { paginationSliceItems } from "../../utils/paginationSliceItems";
import * as S from "./Favorites.styled";

const Favorites = () => {
  const filteredFavorites = useAppSelector((state) => state.games.filteredFavorites);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [fromGameItem, toGameItem] = paginationSliceItems(currentPage, filteredFavorites.length)

  const filteredGames = filteredFavorites.slice(fromGameItem, toGameItem);

  useEffect(() => {
    setCurrentPage(1)
  }, [filteredFavorites])

  if (!filteredFavorites.length) {
    return (
      <S.FavoritesSection>
      <S.FavoritesContainer>
        <p>Games not Found</p>
      </S.FavoritesContainer>
      </S.FavoritesSection>
    )
  }

  return (
    <S.FavoritesSection>
      <S.FavoritesContainer>
        <S.GamesList>
          {filteredGames.slice(0, 4).map((game) => (
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
