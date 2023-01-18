import axios from "axios";
import { Game, GameDetails } from "types/types";

const gamesApi = axios.create({
  baseURL: "https://steam2.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": "c9dfd30a01mshf1c33fa3f183eadp158136jsn6bc32c434085",
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

