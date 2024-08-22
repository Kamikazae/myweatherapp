// backgroundSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBackgroundImage = createAsyncThunk(
  'background/fetchBackgroundImage',
  async () => {
    const response = await axios.get(`https://api.unsplash.com/photos/random`, {
      params: { query: 'nature', client_id: process.env.REACT_APP_UNPLASH_API_KEY },
    });
    return response.data.urls.full;
  }
);

const backgroundSlice = createSlice({
  name: 'background',
  initialState: {
    imageUrl: '',
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBackgroundImage.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBackgroundImage.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.imageUrl = action.payload;
      })
      .addCase(fetchBackgroundImage.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default backgroundSlice.reducer;
