import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    pokemon: null,
    isLoading: false,
    error: null,
};

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: INITIAL_STATE,
    reducers: {
        isFetching: (state) => {
            return{
                ...state,
                isLoading: true,
                error: false,
                pokemon: null,
            }
        },
        success: (state, action) =>{
            return{
                ...state,
                pokemon: [...action.payload],
                isLoading: false,
                error: false,
            }
        },
        isError: (state) =>{
            return{
                ...state,
                isLoading: false,
                error: "Error al cargar los pokemones",
                pokemon: null,
            }
        },
    },
});

export const { isFetching, success, isError } = pokemonSlice.actions;
export default pokemonSlice.reducer;