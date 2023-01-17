import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://steam2.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": "16c6310c20mshf75065b5f71a91dp14d745jsn80d87c1330dc",
    "X-RapidAPI-Host": "steam2.p.rapidapi.com",
  },
});

export const getGamesByKeyword = async (keyword: string, signal: AbortSignal) => {
  const response = await gamesApi.get(`/search/${keyword}/page/1`, {signal});
  return response.data;
};

export const getGameDetails = async (id: number) => {
  const response = await gamesApi.get(`/appDetail/${id}`);
  return response.data;
};

