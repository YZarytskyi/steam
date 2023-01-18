import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { fetchGameDetails } from 'redux/games/gamesThunks';
import { removeGameDetails } from 'redux/games/gamesSlice';
import { Spinner } from '../Spinner/Spinner';
import * as S from './GameDetails.styled';

const GameDetails = (): JSX.Element => {
  const { gameId } = useParams();

  const { gameDetails, isLoading } = useAppSelector(state => state.games);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGameDetails(Number(gameId)));
    return () => {
      dispatch(removeGameDetails());
    };
  }, [gameId]);

  if (isLoading || !gameDetails) {
    return <Spinner />;
  }
  return (
    <S.Section>
      <S.Container>
        <S.Title>{gameDetails.title}</S.Title>
        <S.ImgDescContainer>
          <S.Image src={gameDetails.imgUrl} alt={gameDetails.title} />
          <div>
            <S.Developer>
              Developer(s):{' '}
              <S.DeveloperLink
                href={gameDetails.developer?.link}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                {gameDetails.developer?.name}
              </S.DeveloperLink>
            </S.Developer>
            <S.Publisher>
              Publisher:{' '}
              <S.PublisherLink
                href={gameDetails.publisher?.link}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                {gameDetails.publisher?.name}
              </S.PublisherLink>
            </S.Publisher>
            <S.Date>Date: {gameDetails.released}</S.Date>
            <S.Price>Price: {gameDetails.price}</S.Price>
          </div>
        </S.ImgDescContainer>
        <S.Description>{gameDetails.description}</S.Description>
      </S.Container>
    </S.Section>
  );
};

export default GameDetails;
