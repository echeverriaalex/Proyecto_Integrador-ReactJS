import { isError, isFetching, success } from "../redux/slice/pokemonSlice";
import axios from "axios";

export const fecthPokemon = (e, search) => async (dispatch) => {
    e.preventDefault();
    dispatch(isFetching());
    try{
        let selectedPokemon = search.toLowerCase().trim();
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`);
        dispatch(success(data));
    }
    catch (error) {
        console.error("Error fetching Pokemon data:", error);
        //setError("Pokemon no encontrado, reintenta.");
        dispatch(isError());
    }
    //setIsloading(false);
}