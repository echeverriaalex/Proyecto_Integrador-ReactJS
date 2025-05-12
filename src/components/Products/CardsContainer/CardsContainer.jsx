import { useEffect, useState } from "react";
import { ProductsContainer } from "./CardsContainerStyles";
import { useDispatch, useSelector } from "react-redux";
import { isError, isFetching, success } from "../../../redux/slice/pokemonsSlice";
import { getInfoPokemonByURLFromApi, getPokemonsFromApi } from "../../../axios/axios-pokemons";
import Card from "../Card/Card";

const CardsContainer = () => {
    const dispatch = useDispatch()    
    const { pokemonsList, error } = useSelector((state) => state.pokemons)
    const [pokemonListInfo, setPokemonListInfo] = useState([])

    const limit = 20;
    const [offset, setOffset] = useState(0);

    console.log("Offset: ", offset);
    console.log("Limit: ", limit);
    


    //let pokemons = useSelector((state) => state.pokemons)
    //console.log(pokemons);
    //const { data } = useSelector((state) => state.data)

    const getPokemonsList = async () => {
        try {
            //dispatch(isFetching())
            //console.log("Primero Voy a traer los pokemones desde la API");
            const pokemonsFromAPI = await getPokemonsFromApi(limit, offset);
            dispatch(success(pokemonsFromAPI))
            //console.log("Pokemons del state: ", pokemonsList);
            //setPokemonListInfo(pokemonsWithInfo)
            //return pokemonsList;
        } 
        catch (erro) {
            console.error("Error fetching pokemons:", erro);
            dispatch(isError(error));
        }
    }

    const getInfoPokemons = async () => {
        try {
            let pokemonsWithInfo = await getPokemonsList()
            //console.log("Segundo voy a traer la info de los pokemones por URL");
            pokemonsWithInfo = await Promise.all(
                pokemonsList.map(async (pokemon) => {
                    const info = await getInfoPokemonByURLFromApi(pokemon.url)
                    return { ...pokemon, ...info };
                })
            );
            setPokemonListInfo(pokemonsWithInfo)
            dispatch(success(pokemonsWithInfo))
        } 
        catch (erro) {
            console.error("Error fetching pokemons:", erro);
            dispatch(isError(error));
        }
    }
    

    useEffect(() => {
        /*
        const fetchPokemons = async () => {
            try {
                console.log("Primero Voy a traer los pokemones desde la API");
                const pokemonsList = await getPokemons(limit, offset);
                dispatch(success(pokemonsList))
                //console.log("Hice el dispatch de los pokemones: ", pokemons);

                console.log("Segundo voy a traer la info de los pokemones por URL");
                const pokemonsWithInfo = await Promise.all(
                    pokemons.map(async (pokemon) => {
                        const info = await getInfoPokemonByURL(pokemon.url)
                        return { ...pokemon, ...info };
                    })
                );

                //return pokemonsWithInfo;
                setPokemonListInfo(pokemonsWithInfo)
                //dispatch(success(pokemonsWithInfo))
                //console.log("Hice el dispatch de los pokemones con la info: ", pokemons);

                /*
                console.log("Aca con dispatch el pokemonsList: ", pokemonsList);
                dispatch(success(pokemonsWithInfo))
                console.log("Aca con dispatch el pokemonsList: ", pokemonsWithInfo);
                console.log("Finalmente el pokemons del slice: ", pokemons);
                */

                /*
                //const data = await getAllPokemons()
                const data = await getPokemons()
                console.log( data );
                dispatch(success(data));
                
                const pokemonsWithInfo = await Promise.all(
                    data.map(async (pokemon) => {
                        const info = await getInfoPokemonByURL(pokemon.url)
                        return { ...pokemon, ...info };
                    })
                );

                console.log( pokemonsWithInfo );
                //dispatch(success(pokemonsWithInfo));
                */
               
                // Aca empiezo a testear con axios traer los pokemones y luego traer info de unos 20
                // Dio el resultado que busaba, ahora lo quiero hacer con dispacth
                /*
                const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
                console.log("aca en prodcuts ");
                let results = response.data.results
                console.log(results);
                console.log("Voy a traer info de los pokemones por URL");
                const pokemonsWithInfo = await Promise.all(
                    results.map(async (pokemon) => {
                        const info = await getInfoPokemonByURL(pokemon.url)
                        return { ...pokemon, ...info };
                    })
                );
                console.log( pokemonsWithInfo );
                setPokemonListInfo(pokemonsWithInfo)
                
                
            } catch (erro) {
                console.error("Error fetching pokemons:", erro);
                dispatch(isError(error));
            }
        }

        fetchPokemons();
        */

        //setPokemonListInfo(fetchPokemons())


        getInfoPokemons();
        console.log("Pokemon state: ", pokemonsList);


        console.log("Pokemon List Info: ", pokemonListInfo);
        

    }, [dispatch, error])


    
    


    return(
        <>
        <ProductsContainer>
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
        <button onClick={() => setOffset(offset + limit)}>Load More</button>
        </>
    )
}

export default CardsContainer;