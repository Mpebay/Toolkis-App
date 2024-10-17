import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            const existingItem = state.cartItems.find(
                (item) => item.name === product.name
            );

            if (existingItem) {
                existingItem.quantity += product.quantity;
            } else {
                state.cartItems.push({ ...product, quantity: product.quantity });
            }
        },
        removeFromCart: (state, action) => {
            const productId = action.payload;
            state.cartItems = state.cartItems.filter(item => item.id !== productId);
        },
        clearCart: (state) => {
            state.cartItems = [];
        },
    },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
