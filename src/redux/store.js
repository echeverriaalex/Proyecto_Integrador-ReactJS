import { combineReducers, configureStore } from '@reduxjs/toolkit';
import pokemonsReducer from './slice/pokemonsSlice';
import pokemonReducer from './slice/pokemonSlice';
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import persistStore from 'redux-persist/es/persistStore';
import cartReducer from './cart/cartSlice';
import menuReducer from './menu/menuSlice';
import recommendedReducer  from './recommended/recommendedSlice';

const reducers = combineReducers({ 
    pokemons: pokemonsReducer,
    pokemon: pokemonReducer,
    recommended: recommendedReducer,
    cart: cartReducer,
    menu: menuReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
}

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

export default store;
export const persistor = persistStore(store);