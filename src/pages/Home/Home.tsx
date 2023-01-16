import { GameCard } from "./GameCard";
import { GamesList, HomeContainer } from "./Home.styled";

const Home = () => {
  return (
    <section>
      <HomeContainer>
        <GamesList>
          <GameCard/>
          <GameCard/>
          <GameCard/>
          <GameCard/>
        </GamesList>
        <p>Pagination</p>
      </HomeContainer>
    </section>
  );
};

export default Home;
