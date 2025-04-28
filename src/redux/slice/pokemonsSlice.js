import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    pokemons: [],
    isLoading: false,
    error: null,
};

export const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState: INITIAL_STATE,
    reducers: {
        isFetching: (state) => {
            return{
                ...state,
                isLoading: true,
                error: false,
            }
        },
        success: (state, action) =>{
            return{
                ...state,
                pokemons: [...action.payload],
                isLoading: false,
                error: false,
            }
        },
        isError: (state) =>{
            return{
                ...state,
                isLoading: false,
                error: "Error en Pokemons Slice al cargar los pokemones",
            }
        },
    },
});

export const { isFetching, success, isError } = pokemonsSlice.actions;
export default pokemonsSlice.reducer;