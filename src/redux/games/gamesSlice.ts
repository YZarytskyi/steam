import { GameDetails, PRICE, SortKey } from 'types/types';
import { createSlice } from '@reduxjs/toolkit';
import { Game } from 'types/types';
import { gamesSort } from 'utils/gamesSort';
import { fetchGameDetails, fetchGamesByKeyword } from './gamesThunks';
import { Notify } from 'notiflix';

const initialState: InitialState = {
  games: [],
  favoriteGames: [],
  filteredFavorites: [],
  sortKey: PRICE,
  sortFromLower: false,
  gameDetails: null,
  isLoading: false,
  abortSignal: false,
  error: null,
};

interface InitialState {
  games: Array<Game>;
  favoriteGames: Array<Game>;
  filteredFavorites: Array<Game>;
  sortKey: SortKey;
  sortFromLower: boolean;
  gameDetails: null | GameDetails;
  isLoading: boolean;
  abortSignal: boolean;
  error: null | string;
}

export const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    clearGameList: state => {
      state.games = [];
    },
    addGameToFavorites: (state, action) => {
      state.favoriteGames = [action.payload, ...state.favoriteGames];
    },
    removeGameFromFavorites: (state, action) => {
      state.favoriteGames = state.favoriteGames.filter(
        game => game.appId !== action.payload
      );
    },
    filterFavorites: (state, action) => {
      if (action.payload) {
        state.filteredFavorites = state.favoriteGames.filter(game =>
          game.title.toLowerCase().includes(action.payload)
        );
        return;
      }
      state.filteredFavorites = state.favoriteGames;
    },
    setSortKey: (state, action) => {
      state.sortKey = action.payload;
    },
    setSortFromLower: (state, action) => {
      state.sortFromLower = action.payload;
    },
    setSortedGames: (state, action) => {
      if (action.payload.includes('favorites')) {
        state.filteredFavorites = gamesSort(
          state.favoriteGames,
          state.sortKey,
          state.sortFromLower
        );
        return;
      }
      state.games = gamesSort(state.games, state.sortKey, state.sortFromLower);
    },
    removeGameDetails: state => {
      state.gameDetails = null;
    },
    setAbortSignal: state => {
      state.abortSignal = true;
    },
    removeAbortSignal: state => {
      state.abortSignal = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchGamesByKeyword.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchGamesByKeyword.fulfilled, (state, action) => {
        state.isLoading = false;
        if (state.abortSignal) {
          return;
        }
        if (!action.payload.length) {
          Notify.failure('Games not found', { showOnlyTheLastOne: true });
        }
        const filteredGames = gamesSort(
          action.payload,
          state.sortKey,
          state.sortFromLower
        );
        state.games = filteredGames;
      })
      .addCase(fetchGamesByKeyword.rejected, (state, action: any) => {
        state.error = action.payload;
        state.games = [];
        state.isLoading = false;
      });
    builder
      .addCase(fetchGameDetails.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchGameDetails.fulfilled, (state, action) => {
        state.gameDetails = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchGameDetails.rejected, (state, action: any) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const {
  clearGameList,
  addGameToFavorites,
  removeGameFromFavorites,
  filterFavorites,
  setSortKey,
  setSortFromLower,
  setSortedGames,
  removeGameDetails,
  setAbortSignal,
  removeAbortSignal,
} = gamesSlice.actions;

export default gamesSlice.reducer;
