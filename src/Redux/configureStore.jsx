import { configureStore } from '@reduxjs/toolkit';
import { coachesSlice } from '../pages/mentors/coachSlice';
import reservationReducer from '../pages/reservations/reservationSlice';

const store = configureStore({
  reducer: {
    coaches: coachesSlice,
    reservation: reservationReducer,
  },
});
export default store;
