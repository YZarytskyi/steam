import { createAsyncThunk } from '@reduxjs/toolkit';
import { Game, GameDetails } from 'types/types';
import { getGameDetails, getGamesByKeyword } from 'api/gamesApi';
import { Notify } from 'notiflix';

export const fetchGamesByKeyword = createAsyncThunk<Game[], string>(
  'games/fetch',
  async (keyword, { rejectWithValue }) => {
    try {
      return await getGamesByKeyword(keyword);
    } catch (err: any) {
      console.log(err.response.data);
      Notify.failure(err.message, { showOnlyTheLastOne: true });
      return rejectWithValue(err.response.data);
    }
  }
);

export const fetchGameDetails = createAsyncThunk<GameDetails, number>(
  'gameDetail/fetch',
  async (id, { rejectWithValue }) => {
    try {
      return await getGameDetails(id);
    } catch (err: any) {
      console.log(err);
      Notify.failure(err.response, { showOnlyTheLastOne: true });
      return rejectWithValue(err.response.data);
    }
  }
);
