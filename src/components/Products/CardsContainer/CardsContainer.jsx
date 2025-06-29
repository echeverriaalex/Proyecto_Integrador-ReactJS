import { useEffect, useRef, useState } from "react";
import { ProductsContainer } from "./CardsContainerStyles";
import { useDispatch, useSelector } from "react-redux";
import { isError, isFetching, success } from "../../../redux/slice/pokemonsSlice";
import { getData, getInfoPokemonByURLFromApi } from "../../../axios/axios-pokemons";
import Card from "../Card/Card";

import Button from "../../UI/Button/Button";
import { data, pre } from "framer-motion/client";
import CardsCatalog from "../CardsCatalog/CardsCatalog";

const CardsContainer = () => {
    const dispatch = useDispatch()    
    const { pokemonsList, isLoading, error } = useSelector((state) => state.pokemons)
    //const [pokemonListInfo, setPokemonListInfo] = useState([])
    const [nextUrl, setNextUrl] = useState(null);
    const [prevUrl, setPrevUrl] = useState(null);
    const [currentUrl, setCurrentUrl] = useState("https://pokeapi.co/api/v2/pokemon");
    const containerRef = useRef(); // 👈 Referencia al contenedor

    const goToStart = () => {
        if (containerRef.current) {
            containerRef.current.scrollIntoView({ behavior: "smooth" });
            containerRef.current.style.margin = "12rem";
        }
    }

    const fetchData = async (url) => {
        try{
            const dataAPI = await getData(url);
            return dataAPI;
        } catch (err) {
            console.error("Error al obtener pokémons:", err);
            dispatch(isError(err.message));
        }
    };

    const fetchPokemons = async (url) => {
        try{
            dispatch(isFetching());
            const dataAPI = await fetchData(url);
            setNextUrl(dataAPI.next);
            setPrevUrl(dataAPI.previous);

            const detailedPokemons = await Promise.all(
                dataAPI.results.map(async (pokemon) => {
                    const info = await getInfoPokemonByURLFromApi(pokemon.url);
                    return { ...pokemon, ...info };
                })
            );

            //setPokemonListInfo(detailedPokemons);
            dispatch(success(detailedPokemons));
        }
        catch (err) {
            console.error("Error al obtener pokémons:", err);
            dispatch(isError(err.message));
        }
    }



    // 👇 Funciones para paginación con scroll manual
    const handleNext = () => {
        if (nextUrl) {
            setCurrentUrl(nextUrl);
            containerRef.current?.scrollIntoView({ behavior: "smooth"});
        }
    };

    const handlePrevious = () => {
        if (prevUrl) {
            setCurrentUrl(prevUrl);
            containerRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect( () => {
        //fetchData(currentUrl);
        fetchPokemons(currentUrl);


        /*
        console.log("nextUrl: ", nextUrl);
        console.log("nextUrl: ", prevUrl);
        console.log("pokemonList de slice : ", pokemonsList);
        */

    }, [currentUrl, dispatch, error]);
    
    return(
        <>
            <CardsCatalog ref={containerRef} productsList = {pokemonsList} />

            <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "1rem" }}>
                <Button onClick={handlePrevious} disabled={!prevUrl}>
                    Anterior
                </Button>
                <Button onClick={handleNext} disabled={!nextUrl}>
                    Siguiente
                </Button>
            </div>
        </>
    )
}

export default CardsContainer;