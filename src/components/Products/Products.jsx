import { useEffect } from "react";
import { ProductCard, ProductsContainer } from "./ProductsStyle";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons, getInfoPokemonByID, getInfoPokemonByName, getPokemons } from "../../axios/axios-pokemons";
import { isError, success } from "../../redux/slice/pokemonsSlice";

const Products = () => {
    const dispatch = useDispatch()    
    const { pokemons, error } = useSelector((state) => state.pokemons)
    //let pokemons = useSelector((state) => state.pokemons)
    //console.log(pokemons);
    //const { data } = useSelector((state) => state.data)


    

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                //const data = await getAllPokemons()
                const data = await getPokemons()
                console.log( data )

                /*
                const pokemonsWithInfo = await Promise.all(
                    data.results.map(async (pokemon) => {
                        const info = await getInfoPokemon(pokemon.url);
                        return { ...pokemon, ...info };
                    })
                );

                console.log( pokemonsWithInfo );
                dispatch(success(pokemonsWithInfo));
                */

                dispatch(success(data));
            } catch (erro) {
                console.error("Error fetching pokemons:", erro);
                dispatch(isError(error));
            }
        }
        fetchPokemons();
    }, [dispatch, error])

    /*
    const fetchInfoPokemon = async (url) => {
        try {
            const infoPokemon = await getInfoPokemon(url)
            console.log( infoPokemon )
            return infoPokemon
        } catch (error) {
            console.error("Error fetching Info pokemon: ", error);
        }
    }
    */

    
    return(
        <ProductsContainer>
            {
                pokemons.map((item) => (
                    <ProductCard key={item.name}>                        
                        <h3>{ item.name }</h3>
                        <button>Add to Cart</button>
                    </ProductCard>
                ))
            }
        </ProductsContainer>
    )
}

export default Products;