import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './reducers/cartReducer.js';

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default store;
