import { combineReducers } from '@reduxjs/toolkit';
import AppReducer from './reducers/appSlice/appSlice';

const rootReducer = combineReducers({
  app: AppReducer
});

export default rootReducer;
