import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { getInfoPokemonByID } from "../../../axios/axios-pokemons";
import TypeLabelContainer from "../../../components/Products/Card/Components/TypeLabelContainer/TypeLabelContainer";
import BaseStats from "../../../components/Products/Card/Components/BaseStats/BaseStats"
import { CardPageContainer, DetailsContainerStyled, ImageContainerStyled, InfoContainerStyled, OthersImagesContainerStyled, ProductContainerStyled, ThumbnailContainerStyled } from "./CardPageStyles";
import AspectContainer from "../../../components/Products/Card/Components/AspectContainer/AspectContainer";
import { useDispatch, useSelector } from "react-redux";
import pokebola from "../../../assets/images/pokebola.png"
import { addToCart } from "../../../redux/cart/cartSlice";
import PriceContainer from "../../../components/Products/Card/Components/PriceContainer/PriceContainer";
import { ButtonStyled } from "./CardPageStyles";
import { calculateProductPrice } from "../../../utils/setPricePokemonByType";
import { isError, isFetching, success } from "../../../redux/slice/pokemonSlice";
import Loader from "../../../components/Loader/Loader";

const CardPage = () => {

    const containerRef = useRef(null);
    const { id } = useParams();
    const [ pokemon, setPokemon ] = useState({});
    const dispatch = useDispatch();
    //const { pokemon, isLoading, error } = useSelector((state) => state.pokemon)
    
    const fetchData = async () => {
        try {
            dispatch(isFetching());
            const pokemonInfo = await getInfoPokemonByID(id); // La funcion ya tiene la URL de la API
            const price = calculateProductPrice(pokemonInfo.types);

            //const poke = { ...pokemonInfo, price };
            //console.log("Pokemon --> ", poke);
            setPokemon({ ...pokemonInfo, price });
            dispatch(success({ ...pokemonInfo, price }));
        } catch (err) {
            //console.error("Error fetching categories:", err);
            dispatch(isError(err.message));
        }
    };

    const scroll = () => {
        const container = containerRef.current;
        if (container) {
            //const scrollAmount = (container.clientWidth - 50); // ancho visible del contenedor
            
            /*
            const newPos = direction === 'right'
                ? container.scrollLeft + scrollAmount
                : container.scrollLeft - scrollAmount;
            */

            container.scrollTo({
                //left: newPos,
                top: 0,
                behavior: 'smooth',
            });
        }
    };

    useEffect(() => {
        fetchData();
        scroll();
    }, [id, pokemon]);
    
    return (
        <CardPageContainer
            ref={containerRef}
        >
            <ProductContainerStyled
                typeselected={ pokemon?.types?.[0]?.type?.name }
            >
                <OthersImagesContainerStyled>
                    {pokemon?.sprites?.other?.dream_world?.front_default && (
                        <ThumbnailContainerStyled>
                            <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
                        </ThumbnailContainerStyled>
                    )}
                    {pokemon?.sprites?.other?.home?.front_default && (
                        <ThumbnailContainerStyled>
                            <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name} />
                        </ThumbnailContainerStyled>
                    )}
                    {pokemon?.sprites?.other?.home?.front_shiny && (
                        <ThumbnailContainerStyled>
                            <img src={pokemon.sprites.other.home.front_shiny} alt={pokemon.name} />
                        </ThumbnailContainerStyled>
                    )}
                    {pokemon?.sprites?.other?.official_artwork?.front_default && (
                        <ThumbnailContainerStyled>
                            <img src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} />
                        </ThumbnailContainerStyled>
                    )}                    
                </OthersImagesContainerStyled>
                <ImageContainerStyled>
                    <img src={pokemon?.sprites?.other?.dream_world?.front_default || pokemon?.sprites?.other["official-artwork"].front_default} alt={pokemon?.name} />
                </ImageContainerStyled>
                <DetailsContainerStyled>
                    <InfoContainerStyled>
                        <h2> { pokemon?.name?.toUpperCase() }</h2>
                        <p>XP: { pokemon?.base_experience }</p>
                        <TypeLabelContainer types={ pokemon?.types } />
                        <AspectContainer
                            height={ pokemon?.height }
                            weight={ pokemon?.weight } 
                        />
                        <BaseStats stats={ pokemon?.stats } />
                        <PriceContainer price={ pokemon?.price } />
                    </InfoContainerStyled>
                    <ButtonStyled whileTap={{ scale: 0.9 }} onClick={() => {
                        dispatch(addToCart({
                            id, 
                            name: pokemon?.name,
                            image: pokemon?.sprites?.other?.dream_world?.front_default,
                            price: pokemon?.price,
                        }))}
                    }>
                        Add to Cart
                        <img src={pokebola} alt="pokebola"/>
                    </ButtonStyled>
                </DetailsContainerStyled>
            </ProductContainerStyled>
        </CardPageContainer>
    );
}

export default CardPage;