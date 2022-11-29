/* eslint-disable import/prefer-default-export */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCoaches = createAsyncThunk('coaches/fetchingCoaches', async (id) => {
  const response = await fetch('http://localhost:3000/api/v1/coaches');
  const coaches = await response.json();
  return coaches.data;
});

export const deleteCoach = createAsyncThunk('coaches/deleteCoach', async (id) => {
  const response = await fetch(`http://localhost:3000/api/v1/coaches/${id}`,
    { method: 'delete' });
  const coaches = await response.json();
  return coaches;
});

export const coachesSlice = createSlice({
  name: 'coaches',
  initialState: {
    doctors: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchCoaches.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchCoaches.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.coaches = action.payload;
    },

    [fetchCoaches.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export default coachesSlice.reducer;
