import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './reducers/cartReducer.js';
import authSlice from './reducers/authSlice.js';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        auth: authSlice
    },
});

export default store;
