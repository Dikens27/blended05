import { createSlice } from '@reduxjs/toolkit';
import { fetchBaseCurrency } from './operations';

const slice = createSlice({
  name: 'currency',
  initialState: {
    baseCurrency: '',
    isLoading: false,
    isError: false,
  },
  reducers: {
    setBaseCurrency: (state, action) => {
      state.baseCurrency = action.payload;
    },
  },
  extraReducers: builder =>
    builder.addCase(fetchBaseCurrency.fulfilled, (state, action) => {
      state.baseCurrency = action.payload;
    }),
  selectors: {
    getBaseCurrency: state => state.baseCurrency,
  },
});

export default slice.reducer;
export const { getBaseCurrency } = slice.selectors;
export const { setBaseCurrency } = slice.actions;
