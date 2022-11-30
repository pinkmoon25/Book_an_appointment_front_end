import { applyMiddleware, combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { loginReducer } from './logout/logout';
import { mentorsReducer } from './mentors/mentors'

const rootReducer = combineReducers({
  loginStatus: loginReducer,
  mentorsReducer,
});

const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

export default store;