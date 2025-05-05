import { useEffect, useState } from "react";
import { ProductsContainer } from "./ProductCatalogStyles";
import { useDispatch, useSelector } from "react-redux";
import { getInfoPokemonByURL, getPokemons } from "../../axios/axios-pokemons";
import { isError, success } from "../../redux/slice/pokemonsSlice";
import ProductCard from "../ProductCard/ProductCard";

const ProductCatalog = () => {
    const dispatch = useDispatch()    
    const { pokemons, error } = useSelector((state) => state.pokemons)
    const [pokemonListInfo, setPokemonListInfo] = useState([])
    //let pokemons = useSelector((state) => state.pokemons)
    //console.log(pokemons);
    //const { data } = useSelector((state) => state.data)

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                console.log("Primero Voy a traer los pokemones desde la API");
                const pokemonsList = await getPokemons();
                dispatch(success(pokemonsList))
                //console.log("Hice el dispatch de los pokemones: ", pokemons);
                

                console.log("Segundo voy a traer la info de los pokemones por URL");
                const pokemonsWithInfo = await Promise.all(
                    pokemons.map(async (pokemon) => {
                        const info = await getInfoPokemonByURL(pokemon.url)
                        return { ...pokemon, ...info };
                    })
                );
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
                */
                
            } catch (erro) {
                console.error("Error fetching pokemons:", erro);
                dispatch(isError(error));
            }
        }

        fetchPokemons();
        /*
        if(pokemonListInfo){
            dispatch(success(pokemonListInfo));
        }
        */

    }, [dispatch, error])


    console.log("PokemonListInfo: ", pokemonListInfo);
    


    return(
        <ProductsContainer>
            {
                pokemonListInfo.map((item) => (
                    <ProductCard
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
    )
}

export default ProductCatalog;