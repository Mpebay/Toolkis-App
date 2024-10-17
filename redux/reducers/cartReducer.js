import { ADD_TO_CART } from '../actions/cartActions.js';
import { REMOVE_FROM_CART } from '../actions/cartActions.js';

const initialState = {
    cartItems: []
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const existingItemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);

            if (existingItemIndex >= 0) {
                const updatedCartItems = state.cartItems.map((item, index) =>
                    index === existingItemIndex
                        ? { ...item, count: item.count + action.payload.count }
                        : item
                );
                return {
                    ...state,
                    cartItems: updatedCartItems
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload]
                };
            }
        }

        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload)
            };
        default:
            return state;
    }
};
