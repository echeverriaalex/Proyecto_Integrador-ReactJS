import { getData, getInfoPokemonByID } from "../axios/axios-pokemons.js";
import { API_URL } from "./constants";
import { useState } from "react";

export const getPokemonRandom = async (id) => {
    try{
        const pokemon = getInfoPokemonByID(id);
        return pokemon;
    }
    catch(err){
        console.log("Error en getRamdonsPokemons", err);
    }
}

export const getRandomsPokemonsFromAPI = (quantity) => {

    const collectionRandoms = []

    try{
        const data = getData(API_URL);
        const total = data.count;

        for(let i =0; i < quantity ; i++){
            const idPokemon = Math.floor(Math.random() * total);
            const pokemon  = getPokemonRandom(idPokemon);
            collectionRandoms.push(pokemon);
            return collectionRandoms;
        }
    }
    catch(error){
        console.log("Error en crear la lista de randoms", error);
    }
}