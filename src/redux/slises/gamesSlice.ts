import { GameDetails, PRICE, SortKey } from 'types/types';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getGamesByKeyword, getGameDetails } from 'api/gamesApi';
import { Game } from 'types/types';
import { gamesSort } from 'utils/gamesSort';
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

export const fetchGamesByKeyword = createAsyncThunk<Game[], string>(
  'games/fetch',
  (keyword, { rejectWithValue }) => {
    try {
      return getGamesByKeyword(keyword);
    } catch (err: any) {
      console.log(err);
      return rejectWithValue(err.response.data);
    }
  }
);

export const fetchGameDetails = createAsyncThunk<GameDetails, number>(
  'gameDetail/fetch',
  (id, { rejectWithValue }) => {
    try {
      return getGameDetails(id);
    } catch (err: any) {
      console.log(err);
      return rejectWithValue(err.response.data);
    }
  }
);

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
      const location: string = action.payload;
      if (location.includes('favorites')) {
        state.favoriteGames = gamesSort(
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
          Notify.failure('Games not found')
        }
        state.games = action.payload;
      })
      .addCase(fetchGamesByKeyword.rejected, (state, action: any) => {
        state.error = action.payload;
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
