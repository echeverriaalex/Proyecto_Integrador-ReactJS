import { createSlice } from '@reduxjs/toolkit';
import { addItemToCart, removeItemFromCart, resetShippingCost } from './cartUtils';
import { SHIPPING_COST } from '../../utils/constants';

const INITIAL_STATE = {
    cartItems: [],
    shippingCost: 0,
    hidden: true,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL_STATE,
    reducers: {
        addToCart: (state, action) => {
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload),
                shippingCost: state.shippingCost,
            }
        },
        removeFromCart: (state, action) => {
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload.id),
                shippingCost: resetShippingCost(state.cartItems, SHIPPING_COST),
            }
        },
        clearCart: (state) => {
            return{
                ...state,
                cartItems: [],
                shippingCost: 0,
            }
        },
        toggleCartHidden: (state) => {
            return {
                ...state,
                hidden: !state.hidden,
            }
        },

        /*
        setShippingCost: (state, action) => {
            state.shippingCost = action.payload;
        },
        */
    },
})

export default cartSlice.reducer;
export const { addToCart, removeFromCart, clearCart, toggleCartHidden } = cartSlice.actions;