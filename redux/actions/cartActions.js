
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const addToCart = (product, count) => {
    return {
        type: ADD_TO_CART,
        payload: {
            ...product,
            count
        }
    };
};

export const removeFromCart = (id) => {
    return {
        type: REMOVE_FROM_CART,
        payload: id
    };
};
