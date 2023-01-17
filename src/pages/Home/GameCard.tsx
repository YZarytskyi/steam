import { Game } from "types/types";
import sprite from "assets/icons.svg";
import * as S from "./Home.styled";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "hooks/redux-hooks";
import {
  addGameToFavorites,
  removeGameFromFavorites,
} from "redux/slises/gamesSlice";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  const favoriteGames = useAppSelector((state) => state.games.favoriteGames);
  const dispatch = useAppDispatch();

  const [isSelected, setIsSelected] = useState(() => {
    const isGameSelected = favoriteGames.find(
      (favoriteGame) => favoriteGame.appId === game.appId
    );
    if (isGameSelected) {
      return true;
    }
    return false;
  });

  const onClickToggleFavorite: React.MouseEventHandler<SVGSVGElement> = (e) => {
    e.preventDefault();
    setIsSelected((state) => !state);
    if (isSelected) {
      dispatch(removeGameFromFavorites(game.appId));
      return;
    }
    dispatch(addGameToFavorites(game));
  };

  return (
    <S.GameItem>
      <S.GameLink to={`/${game.appId}`}>
        <S.GameImage src={game.imgUrl} alt={game.title} />
        <S.GameTitle>{game.title}</S.GameTitle>
        <S.GameDate>{game.released}</S.GameDate>
        <S.GamePrice>{game.price}</S.GamePrice>
        <S.HeartIcon
          isSelected={isSelected}
          onClick={onClickToggleFavorite}
          role="button"
        >
          <use href={`${sprite}#icon-heart`} />
        </S.HeartIcon>
        <S.PlayIconContainer isSelected={isSelected}>
          <S.PlayIcon>
            <use href={`${sprite}#icon-play-circle`} />
          </S.PlayIcon>
        </S.PlayIconContainer>
      </S.GameLink>
    </S.GameItem>
  );
};

export { GameCard };
