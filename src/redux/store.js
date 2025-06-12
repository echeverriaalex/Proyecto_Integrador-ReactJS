import { combineReducers, configureStore } from '@reduxjs/toolkit';
import pokemonsReducer from './slice/pokemonsSlice';
import pokemonReducer from './slice/pokemonSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import persistStore from 'redux-persist/es/persistStore';
import cartReducer from './cart/cartSlice';
import menuReducer from './menu/menuSlice';

const reducers = combineReducers({ 
    pokemons: pokemonsReducer,
    pokemon: pokemonReducer,
    cart: cartReducer,
    menu: menuReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whiteLsit: ['cart'],
}

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,

    /* chat gpt
    middleware: (getDefaultMiddleware) => getDefaultMiddleware ({
        serializableCheck: false, // 👈 Desactiva el middleware que genera la advertencia
      }),
    */
});

export default store;
export const persistor = persistStore(store);