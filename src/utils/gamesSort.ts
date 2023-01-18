import moment from "moment";
import { Game, PRICE, SortKey } from "../types/types";

export const gamesSort = (games: Game[], sortKey: SortKey, sortFromLower: boolean) => {
  if (sortKey === PRICE) {
    const gamesWithoutPrice = games.filter(game => ! parseFloat(game.price.trim()))
    const gamesWithPrice = games.filter(game =>  parseFloat(game.price.trim()))
    const sortedGamesWithPrice = gamesWithPrice.sort((a, b) => {
      const price1 = parseFloat(a.price);
      const price2 = parseFloat(b.price);
      const result = sortFromLower
        ? price1 - price2
        : price2 - price1;
      return result;
    })
    return [...sortedGamesWithPrice, ...gamesWithoutPrice];
  }
  const gamesWithoutDate = games.filter(game => !game.released.trim())
  const gamesWithDate = games.filter(game => game.released.trim())
  const sortedGamesWithDate = gamesWithDate.sort((a, b) => {
    const date1 = moment(a.released).valueOf();
    const date2 = moment(b.released).valueOf();
    const result = sortFromLower ? date2 - date1 : date1 - date2;
    return result;
  });
  return [...sortedGamesWithDate, ...gamesWithoutDate]
}