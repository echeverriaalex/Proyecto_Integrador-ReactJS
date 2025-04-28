import { combineReducers, configureStore } from '@reduxjs/toolkit';
import pokemonsReducer from './slice/pokemonsSlice';
import pokemonReducer from './slice/pokemonSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import persistStore from 'redux-persist/es/persistStore';

const reducers = combineReducers({ 
    pokemons: pokemonsReducer,
    pokemon: pokemonReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whiteLsit: [],
}

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
});

export default store;
export const persistor = persistStore(store);