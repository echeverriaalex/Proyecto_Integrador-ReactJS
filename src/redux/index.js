import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './slice/pokemonSlice';

export const store = configureStore({
    reducer: {
        pokemon: pokemonReducer
        /*
        cart: cartReducer,
        products: productsReducer,
        categories: categoriesReducer,
        user: userReducer,
        */
    },
});