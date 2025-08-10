import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    categories: [],
    isLoading: false,
    error: null,
};

export const categoriesSlice = createSlice({
    name: 'categories',
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
                categories: [...action.payload],
                isLoading: false,
                error: false,
            }
        },
        isError: (state) =>{
            return{
                ...state,
                isLoading: false,
                error: "Error en Categories Slice al cargar las categorias",
            }
        },
    },
});

export const { isFetching, success, isError } = categoriesSlice.actions;
export default categoriesSlice.reducer;