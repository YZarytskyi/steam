import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getGamesByKeyword } from "api/gamesApi";
import { Game } from "types/types";

const initialState: InitialState = {
  games: [],
  favoriteGames: [],
  isLoading: false,
  error: null,
};

interface InitialState {
  games: Array<Game>;
  favoriteGames: Array<Game>;
  isLoading: boolean;
  error: null | string;
}

export const fetchGamesByKeyword = createAsyncThunk<Game[], string>(
  "games/fetch",
  async (keyword, { rejectWithValue }) => {
    try {
      return await getGamesByKeyword(keyword);
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

export const { clearGameList, addGameToFavorites, removeGameFromFavorites } =
  gamesSlice.actions;

export default gamesSlice.reducer;
