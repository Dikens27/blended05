import { createSlice } from '@reduxjs/toolkit';
import { fetchBaseCurrency } from './operations';

const slice = createSlice({
  name: 'currency',
  initialState: {
    baseCurrency: '',
    isLoading: false,
    isError: false,
  },
  reducers: {},
  extraReducers: builder =>
    builder.addCase(fetchBaseCurrency.fulfilled, (state, action) => {
      state.baseCurrency = action.payload;
    }),
});

export default slice.reducer;
