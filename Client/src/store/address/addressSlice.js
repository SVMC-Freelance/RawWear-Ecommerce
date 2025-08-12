import { createSlice } from '@reduxjs/toolkit';
import { fetchAddress } from './addressThunk';

// Example async thunk to simulate API save


const addressSlice = createSlice({
  name: 'address',
  initialState: {
    data: [], // store as array
    status: 'idle',
    error: null
  },
  reducers: {
    addAddress: (state, action) => {
      // Add new address to array
      state.data.push({
        id: Date.now(), // unique id
        ...action.payload
      });
    },
    removeAddress: (state, action) => {
      state.data = state.data.filter(addr => addr.id !== action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddress.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchAddress.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { addAddress, removeAddress } = addressSlice.actions;
export default addressSlice.reducer;
