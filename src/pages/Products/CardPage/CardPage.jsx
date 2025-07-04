import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getInfoPokemonByID } from "../../../axios/axios-pokemons";
import TypeLabelContainer from "../../../components/Products/Card/Components/TypeLabelContainer/TypeLabelContainer";
import BaseStats from "../../../components/Products/Card/Components/BaseStats/BaseStats";
import { CardPageContainer, ImageContainerStyled, InfoContainerStyled, ProductContainerStyled } from "./CardPageStyles";
import AspectContainer from "../../../components/Products/Card/Components/AspectContainer/AspectContainer";
import { ButtonStyled } from "../../../components/Products/Card/CardStyles";
import { useDispatch } from "react-redux";
import pokebola from "../../../assets/images/pokebola.png"
import { addToCart } from "../../../redux/cart/cartSlice";

const CardPage = ({typeSelected, price}) => {

    const { id } = useParams();
    const [ dataPokemon, setDataPokemon ] = useState([]);
    const dispatch = useDispatch();

    const fetchData = async () => {
        try {
            const pokemonInfo = await getInfoPokemonByID(id); // La funcion ya tiene la URL de la API
            console.log(pokemonInfo);
            setDataPokemon(pokemonInfo);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };
    
    useEffect(() => {
        fetchData();
    }, [id]);

    return (
        <CardPageContainer>
            <ProductContainerStyled>
                <ImageContainerStyled>
                    <img src={dataPokemon.sprites?.other["dream_world"].front_default || dataPokemon.sprites?.other["official-artwork"].front_default} alt={dataPokemon.name} />
                </ImageContainerStyled>
                <InfoContainerStyled>
                    <h2> { dataPokemon.name }</h2>
                    <p>ID Pokemon: { id }</p>

                    <p>XP: { dataPokemon.base_experience }</p>
                    <AspectContainer
                        height={ dataPokemon.height }
                        weight={ dataPokemon.weight } 
                    />
                </InfoContainerStyled>
                { 
                /*
                <TypeLabelContainer types={ dataPokemon.types } />
                <BaseStats  stats={dataPokemon.stats}/> 
                */
                }


                
            </ProductContainerStyled>
            
            <ButtonStyled whileTap={{ scale: 0.9 }} onClick={() => dispatch(addToCart({ id, name, image, price }))}>
                Add to Cart
                <img src={pokebola} alt="pokebola"/>
                <h3>$ { price }</h3>
            </ButtonStyled>
        </CardPageContainer>
    );
}

export default CardPage;