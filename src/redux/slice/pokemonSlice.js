import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    //pokemons: [],
    //data: initialState,
    data: [],
    isLoading: false,
    error: null,
};

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: INITIAL_STATE,
    reducers: {
        /*
        fetchPokemonsStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchPokemonsSuccess: (state, action) => {
            state.pokemons = action.payload;
            state.loading = false;
        },
        fetchPokemonsFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        */
        isFetching: (state) => {
            return{
                ...state,
                isLoading: true,
                error: false,
                data: null,
            }
        },
        success: (state, action) =>{
            return{
                ...state,
                data: action.payload,
                isLoading: false,
                error: false,
            }
        },
        isError: (state) =>{
            return{
                ...state,
                isLoading: false,
                error: "Error al cargar los pokemones",
                data: null,
            }
        },
    },
});

export const { isFetching, success, isError } = pokemonSlice.actions;
export default pokemonSlice.reducer;