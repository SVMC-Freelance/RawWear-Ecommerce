import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './cart/cartSlice';
import addressReducer from './address/addressSlice'

export const store=configureStore({
    reducer:{
       cart:cartReducer,
       address:addressReducer,
    },
});

export default store;