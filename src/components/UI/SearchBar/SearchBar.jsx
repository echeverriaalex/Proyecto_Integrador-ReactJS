import { SearchBarStyled, SearchContainerStyled, SearchIconStyled } from "./SearchBarStyles";
import { motion } from "framer-motion";

import { getInfoPokemonByName, getInfoPokemonByURLFromApi } from "../../../axios/axios-pokemons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {

    const [pokemon, setPokemon] = useState("");
    const navigate = useNavigate();

    const fetchData = async (url) => {
        try{
            const dataAPI = await getInfoPokemonByName(url);
            //console.log("Data fetched from API del pokemon buscado:", dataAPI);            
            return dataAPI;
        } catch (err) {
            console.error("Error al obtener pokémons:", err);
            //dispatch(isError(err.message));
        }
    };

    const handleChange = async (e) => {
        const value = e.target.value;

        setPokemon(value.trim().toLowerCase());
        //console.log("Pokémon a buscar :", value);
        
        /*
        if (value.trim() !== "") {
            setPokemon(value);
            //const data = await fetchData(value);
            //console.log("Pokémon encontrado:", data);            
        }
        */
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            searchPokemon();
        }
    };

    const searchPokemon = async () => {
        try {
            const data = await fetchData(pokemon);

            if (data && data.id) {
                //console.log("Pokémon encontrado:", data);
                navigate(`/products/${data.id}`);
            
            } /*
            else {
                setError("Pokémon no encontrado");
            }
            */            
            //setPokemon("");
        } catch (err) {
            console.error("Error al mostrar pokémon:", err);
        }
    };

    return (
        <SearchContainerStyled>
            <SearchBarStyled type="text" placeholder="Buscar" value={pokemon} 
                onChange={handleChange} 
                onKeyDown={handleKeyDown}
            />
            <motion.div whileTap={{ scale: 0.8 }}>
                <SearchIconStyled onClick={searchPokemon} />
            </motion.div>
        </SearchContainerStyled>
    );
};

export default SearchBar;