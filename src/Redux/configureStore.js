import { configureStore } from '@reduxjs/toolkit';
import coachReducer from '../pages/mentors/coachesSlice';
import reservations from '../pages/reservations/reservationPageSlice';

const store = configureStore({
  reducer: {
    coach: coachReducer,
    reservations,
  },
});
export default store;
