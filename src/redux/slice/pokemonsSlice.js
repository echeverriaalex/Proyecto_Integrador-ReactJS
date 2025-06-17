import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    pokemonsList: [],
    isLoading: false,
    error: null,
};

export const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState: INITIAL_STATE,
    reducers: {
        isFetching: (state) => {
            //console.log("aca en isFetching pokemonsSlice");
            return{
                ...state,
                isLoading: true,
                error: false,
            }
        },
        success: (state, action) =>{
            //console.log("aca en success pokemonsSlice: ", action.payload);
            return{
                ...state,
                pokemonsList: [...action.payload],
                isLoading: false,
                error: false,
            }
        },
        isError: (state) =>{
            //console.log("aca en isError pokemonsSlice");            
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