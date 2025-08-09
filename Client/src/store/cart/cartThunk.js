
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCart = createAsyncThunk(
  'cart/fetchCart',
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return [
      { id: 1, name: 'T-Shirt', price: 500, quantity: 1, shipping: 50 ,color:"green",image:"images"},
      { id: 2, name: 'Jeans', price: 1200, quantity: 2, shipping: 100 ,color:"yellow",image:"images"},
      { id: 3, name: 'Pants', price: 1000, quantity: 3, shipping: 100 ,color:"red",image:"images"},
      { id: 4, name: 'Shirt', price: 800, quantity: 6, shipping: 100 ,color:"Blue",image:"images"},
    ];
  }
);
