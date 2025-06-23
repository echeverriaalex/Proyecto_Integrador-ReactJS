import axios from "axios";
import { API_URL_ALL, API_URL, POKEMON_URL } from "../utils/constants";


export const getData = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data;
    }
    catch (error) {
        console.error("Error en get data ", error);
        throw error;
    }
}

export const getDataFromType = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data;
    }
    catch (error) {
        console.error("Error en get data ", error);
        throw error;
    }
}


// Obtengo todos los pokemons de la API 1302 en total
export const getAllPokemonsFromApi = async () => {
    try{
        const response = await axios.get(API_URL_ALL);
        return response.data.results;
    }
    catch (error) {
        console.error("Error En AXIOS fetching all pokemons -> ", error);
        throw error;
    }   
}

// Obtengo 20 pokemons de la API por pagina
export const getPokemonsFromApi = async (limit, offset) => {
    try{
        const response = await axios.get( `${API_URL}?offset=${offset}&limit=${limit}` );
        //const response = await axios.get(API_URL);
        return response.data.results;
    }
    catch (error) {
        console.error("Error En AXIOS fetching all pokemons -> ", error);
        throw error;
    }   
}

export const getInfoPokemonByURLFromApi = async (url) => {
    try{
        const response = await axios.get(url);
        return response.data;
    }
    catch (error) {
        console.error("Error En AXIOS fetching pokemons by URL -> ", error);
        throw error;
    }   
}

export const getInfoPokemonByID = async (id) => {
    try{
        const response = await axios.get(`${POKEMON_URL}${id}`);
        return response.data;
    }
    catch (error) {
        console.error("Error En AXIOS fetching pokemons by ID -> ", error);
        throw error;
    }   
}

export const getInfoPokemonByName = async (name) => {
    try{
        const response = await axios.get(`${POKEMON_URL}${name}`);
        return response.data;
    }
    catch (error) {
        console.error("Error En AXIOS fetching pokemons by Name -> ", error);
        throw error;
    }   
}