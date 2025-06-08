import { useEffect, useRef, useState } from "react";
import { ProductsContainer } from "./CardsContainerStyles";
import { useDispatch, useSelector } from "react-redux";
import { isError, isFetching, success } from "../../../redux/slice/pokemonsSlice";
import { getData, getInfoPokemonByURLFromApi } from "../../../axios/axios-pokemons";
import Card from "../Card/Card";

import Button from "../../UI/Button/Button";

const CardsContainer = () => {
    const dispatch = useDispatch()    
    const { pokemonsList, error } = useSelector((state) => state.pokemons)
    const [pokemonListInfo, setPokemonListInfo] = useState([])
    const [nextUrl, setNextUrl] = useState(null);
    const [prevUrl, setPrevUrl] = useState(null);
    const [currentUrl, setCurrentUrl] = useState("https://pokeapi.co/api/v2/pokemon");

    const containerRef = useRef(); // 👈 Referencia al contenedor


    const goToStart = () => {
        if (containerRef.current) {
            containerRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }

    const fetchPokemons = async (url) => {
        try {
            dispatch(isFetching());
            const dataAPI = await getData(url); // Este debe aceptar una URL
            const detailedPokemons = await Promise.all(
                dataAPI.results.map(async (pokemon) => {
                    const info = await getInfoPokemonByURLFromApi(pokemon.url);
                    return { ...pokemon, ...info };
                })
            );
            setPokemonListInfo(detailedPokemons);
            setNextUrl(dataAPI.next);
            setPrevUrl(dataAPI.previous);
            dispatch(success(detailedPokemons));


            /*
            // 👇 Hace scroll hacia el contenedor al principio
            if (containerRef.current) {
                containerRef.current.scrollIntoView({ behavior: "smooth" });
            }
            */
            


        } catch (err) {
            console.error("Error al obtener pokémons:", err);
            dispatch(isError(err.message));
        }
    };

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

        fetchPokemons(currentUrl);

    }, [currentUrl])
    
    return(
        <>
            <ProductsContainer ref={containerRef}>
                {
                    pokemonListInfo.map((item) => (
                        <Card
                            key = {item.id}
                            id = {item.id}
                            name = {item.name}
                            sprites = {item.sprites}
                            weigth ={ item.weight }
                            types = {item.types}
                        />
                    ))
                }
            </ProductsContainer>

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