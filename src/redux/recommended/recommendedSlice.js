import { createSlice } from "@reduxjs/toolkit"
import { getRandomsPokemonsFromAPI } from "../../utils/getRandomsPokemons/getRandomsPokemonsFromAPI";

const INITIAL_STATE = {
    recommended: getRandomsPokemonsFromAPI(10)
}

export const recommendedSlice = createSlice({
    name: 'recommended',
    initialState: INITIAL_STATE,
    reducers: {
        randomRecommended: state => {
            return state
        }
    }
})

export const { randomRecommended } = recommendedSlice.actions
export default recommendedSlice.reducer