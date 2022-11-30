/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  coaches: [],
  error: '',
};

export const fetchCoaches = createAsyncThunk('coach/fetchCoaches', () => axios
  .get('http://localhost:3000/coaches')
  .then((response) => response.data));
const coachSlice = createSlice({
  name: 'coach',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCoaches.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCoaches.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = '';
    });
    builder.addCase(fetchCoaches.rejected, (state, action) => {
      state.loading = false;
      state.coaches = [];
      state.error = action.error.message;
    });
  },
});

export default coachSlice.reducer;
