/*
import { createSlice } from "@reduxjs/toolkit"
import { getRandomsPokemonsFromAPI } from "../../utils/getRandomsPokemons/";

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

*/

// recommendedSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRandomsPokemonsFromAPI } from "../../utils/getRandomsPokemons";

export const fetchRecommended = createAsyncThunk(
  'recommended/fetchRecommended',
  async (count = 10) => {
    const data = await getRandomsPokemonsFromAPI(count);
    return data;
  }
);

const recommendedSlice = createSlice({
  name: 'recommended',
  initialState: {
    recommended: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecommended.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRecommended.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.recommended = action.payload;
      })
      .addCase(fetchRecommended.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default recommendedSlice.reducer;