import {
  GameDate,
  GameImage,
  GameItem,
  GamePrice,
  GameTitle,
  HeartIcon,
} from "./Home.styled";
import sprite from "assets/icons.svg";

const GameCard = () => {
  return (
    <GameItem>
      <GameImage src="" alt="" />
      <GameTitle>Title</GameTitle>
      <GameDate>Date</GameDate>
      <GamePrice>Price</GamePrice>
      <HeartIcon>
        <use href={`${sprite}#icon-heart`} />
      </HeartIcon>
    </GameItem>
  );
};

export { GameCard };
