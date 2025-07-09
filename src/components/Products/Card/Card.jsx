import { ImageContainer, ContentCardStyled, InfoContainerStyled } from "./CardStyles"
import BaseStats from "./Components/BaseStats/BaseStats";
import AspectContainer from "./Components/AspectContainer/AspectContainer";
import { calculateProductPrice } from "../../../utils/setPricePokemonByType";
import TypeLabelContainer from "./Components/TypeLabelContainer/TypeLabelContainer";
import { useNavigate } from "react-router-dom";
import PriceContainer from "./Components/PriceContainer/PriceContainer";

const Card = ({id, name, sprites, weight, types, height, stats}) =>{
    
    let typeSelected = types[0].type.name;
    const image = sprites.other["dream_world"].front_default || sprites.other["official-artwork"].front_default;
    const price = calculateProductPrice(types);
    const navigate = useNavigate();

    return(
        <ContentCardStyled
            typeSelected = {typeSelected}
            onClick={() => navigate(`/products/${id}`, {
                state: {
                    price,
                    typeSelected,
                    stats
                }
            })}
        >
            <ImageContainer>
                <img src={ image } alt={name} />
            </ImageContainer>
            <h2>{ name.charAt(0).toUpperCase() + name.slice(1) }</h2>
            <TypeLabelContainer types={types} />
            <InfoContainerStyled>
                <AspectContainer 
                    height={height}
                    weight={weight} 
                />
                <BaseStats stats={stats} />
                <PriceContainer types = { types }/>
            </InfoContainerStyled>
        </ContentCardStyled>
    )
}

export default Card;