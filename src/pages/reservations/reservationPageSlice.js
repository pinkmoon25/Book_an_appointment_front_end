/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  reservations: [],
};

const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
    addReservations: (state, { payload }) => {
      state.reservations = payload;
    },
  },
});

export const { addReservations } = reservationsSlice.actions;
export default reservationsSlice.reducer;
