import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
const baseUrl = 'http://localhost:3000/api/messages';

const initialState = {
  greeting: '',
  isLoading: false,
  hasError: false,
  isFetched: false,
  error: null,
};

export const fetchGreeting = createAsyncThunk('greeting/fetchGreetings', async () => {
  try {
    const response = await fetch(baseUrl);
    const data = await response.json();
    return data[0].message;
  } catch (error) {
    throw new Error('Failed to fetch greeting');
  }
});

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGreeting.pending, (state) => {
      const isLoading = true;
      return { ...state, isLoading };
    });
    builder.addCase(fetchGreeting.fulfilled, (state, action) => {
      const isLoading = false;
      const isFetched = true;
      const greeting = action.payload;
      return {
        ...state, greeting, isFetched, isLoading, error: null,
      };
    });
    builder.addCase(fetchGreeting.rejected, (state, action) => {
      const isLoading = false;
      const error = action.error.message;
      const hasErroar = true;
      return {
        ...state,
        isLoading,
        hasErroar,
        error,
      };
    });
  },
});

export default greetingSlice.reducer;
