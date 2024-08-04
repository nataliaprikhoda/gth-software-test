import { configureStore } from '@reduxjs/toolkit';
import RandomNumbersReducer from '../../RandomNumbers/state/reducer';

export const store = configureStore({
  reducer: {
    randomNumbers: RandomNumbersReducer,
  },
});