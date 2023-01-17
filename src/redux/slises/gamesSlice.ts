import { PRICE, SortKey } from "types/types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getGamesByKeyword } from "api/gamesApi";
import { Game } from "types/types";
import moment from "moment";

const initialState: InitialState = {
  games: [],
  favoriteGames: [],
  sortKey: PRICE,
  sortFromLower: false,
  isLoading: false,
  error: null,
};

interface InitialState {
  games: Array<Game>;
  favoriteGames: Array<Game>;
  sortKey: SortKey;
  sortFromLower: boolean;
  isLoading: boolean;
  error: null | string;
}

interface FetchGamesProps {
  keyword: string;
  signal: AbortSignal;
}

export const fetchGamesByKeyword = createAsyncThunk<Game[], FetchGamesProps>(
  "games/fetch",
  async ({keyword, signal}, { rejectWithValue }) => {
    try {
      return await getGamesByKeyword(keyword, signal);
    } catch (err: any) {
      console.log(err);
      return rejectWithValue(err.response.data);
    }
  }
);

export const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    clearGameList: (state) => {
      state.games = [];
    },
    addGameToFavorites: (state, action) => {
      state.favoriteGames = [action.payload, ...state.favoriteGames];
    },
    removeGameFromFavorites: (state, action) => {
      state.favoriteGames = state.favoriteGames.filter(
        (game) => game.appId !== action.payload
      );
    },
    setSortKey: (state, action) => {
      state.sortKey = action.payload;
    },
    setSortFromLower: (state, action) => {
      state.sortFromLower = action.payload;
    },
    setSortedGames: (state) => {
      if (state.sortKey === PRICE) {
        state.games = state.games.sort((a, b) => {
          const price1 = parseInt(a.price)
          const price2 = parseInt(b.price)
          const result = state.sortFromLower ? price1 - price2 : price2 - price1
          return result
        })
        return
      }
      state.games = state.games.sort((a, b) => {
        const date1 = moment(a.released).valueOf()
        const date2 = moment(b.released).valueOf()
        const result = state.sortFromLower ? date2 - date1 : date1 - date2
        return result
      })
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGamesByKeyword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGamesByKeyword.fulfilled, (state, action) => {
        state.games = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchGamesByKeyword.rejected, (state, action: any) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const {
  clearGameList,
  addGameToFavorites,
  removeGameFromFavorites,
  setSortKey,
  setSortFromLower,
  setSortedGames,
} = gamesSlice.actions;

export default gamesSlice.reducer;
