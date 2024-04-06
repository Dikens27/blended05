import { configureStore } from '@reduxjs/toolkit';
import currencyReduser from './slise';

export const store = configureStore({
  reducer: {
    currency: currencyReduser,
  },
});
