import { getData, getInfoPokemonByID } from "../axios/axios-pokemons.js";
import { API_URL } from "./constants";
import { useState } from "react";

const getPokemonRandom = async (id) => {
    try{
        const pokemon = getInfoPokemonByID(id);
        return pokemon;
    }
    catch(err){
        console.log("Error en getRamdonsPokemons", err);
    }
}

const getRandomsPokemonsFromAPI = (quantity) => {

    const [total, setTotal] = useState(null);
    const [collectionRandoms, setCollectionRandoms] = useState([]);

    try{
        const data = getData(API_URL);
        setTotal(data.count);

        for(let i =0; i < quantity ; i++){
            const idPokemon = Math.floor(Math.random() * total);
            const pokemon  = getPokemonRandom(idPokemon);


            // Hacer un checkeo para que no haya pokemones repetidos


            setCollectionRandoms(pokemon, ...collectionRandoms);


            return collectionRandoms;
        }
    }
    catch(error){
        console.log("Error en crear la lista de randoms", error);
    }
}

export default {getRandomsPokemonsFromAPI, getPokemonRandom}