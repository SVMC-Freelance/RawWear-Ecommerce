
import { createSlice } from '@reduxjs/toolkit';
import { fetchCart } from './cartThunk';

const initialState = {
  items: [],
  subtotal: 0,
  shippingTotal: 0,
  coupon:0,
  status: 'idle', // loading, succeeded, failed
  error: null
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increaseQuantity: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) {
        item.quantity += 1;
        cartSlice.caseReducers.updateTotals(state);
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        cartSlice.caseReducers.updateTotals(state);
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload);
      cartSlice.caseReducers.updateTotals(state);
    },
    updateTotals: (state) => {
      state.subtotal = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
      state.shippingTotal = state.items.reduce((sum, i) => sum + i.shipping, 0);
    },
    addcoupon:(state,action)=>{
       state.coupon=action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = 'succeeded';
        cartSlice.caseReducers.updateTotals(state);
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { increaseQuantity, decreaseQuantity, removeItem,addcoupon } = cartSlice.actions;
export default cartSlice.reducer;
