import { configureStore } from '@reduxjs/toolkit';
import coachesReducer from '../pages/mentors/coachSlice';
import reservationsReducer from '../pages/reservations/reservationSlice';

const store = configureStore({
  reducer: {
    coaches: coachesReducer,
    reservations: reservationsReducer,
  },
});
export default store;
