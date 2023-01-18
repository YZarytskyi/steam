import styled from "styled-components";

export const FavoritesSection = styled.section`
  padding: 24px 0;
  @media screen and (max-width: 1170px) {
    padding: 15px 0;
  }
`;

export const FavoritesContainer = styled.div`
  margin: 0 auto;
  max-width: 1171px;
  padding: 0 26px;
  @media screen and (max-width: 1170px) {
    max-width: 360px;
    padding: 0 53.5px;
  }
`;

export const GamesList = styled.ul`
  display: flex;
  gap: 21px;
  margin-bottom: 30px;
  @media screen and (max-width: 1170px) {
    flex-direction: column;
  }
`;
