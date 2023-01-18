import axios from "axios";
import { Game, GameDetails } from "types/types";

const gamesApi = axios.create({
  baseURL: "https://steam2.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": "0b7213985amsh871d3b18c85c7edp101408jsn7b98985eb070",
    "X-RapidAPI-Host": "steam2.p.rapidapi.com",
  },
});

export const getGamesByKeyword = async (keyword: string) => {
  const response = await gamesApi.get<Game[]>(`/search/${keyword}/page/1`);
  return response.data;
};

export const getGameDetails = async (id: number) => {
  const response = await gamesApi.get<GameDetails>(`/appDetail/${id}`);
  return response.data;
};

