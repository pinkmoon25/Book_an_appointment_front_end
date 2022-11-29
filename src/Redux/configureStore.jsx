import { applyMiddleware, combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { loginReducer } from './logout/logout';

const rootReducer = combineReducers({
  loginStatus: loginReducer
});

const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

export default store;