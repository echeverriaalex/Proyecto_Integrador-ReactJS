import { useDispatch } from "react-redux";
import pokebola from "../../../assets/images/pokebola.png"
import { ImageContainer, ButtonStyled, ContentCardStyled, ProductContainerStyled, InfoContainerStyled } from "./CardStyles"
import { addToCart } from "../../../redux/cart/cartSlice";
import BaseStats from "./Components/BaseStats/BaseStats";
import AspectContainer from "./Components/AspectContainer/AspectContainer";
import { calculateProductPrice } from "../../../utils/setPricePokemonByType";
import TypeLabelContainer from "./Components/TypeLabelContainer/TypeLabelContainer";
import { useNavigate } from "react-router-dom";

const Card = ({id, name, sprites, weigth, types, height, stats}) =>{
    
    let typeSelected = types[0].type.name;
    const dispatch = useDispatch();
    const image = sprites.other["dream_world"].front_default || sprites.other["official-artwork"].front_default;
    const price = calculateProductPrice(types);
    const navigate = useNavigate();

    return(
        <ProductContainerStyled>
            <ContentCardStyled 
                key={id} 
                typeSelected={typeSelected}
                onClick={() => navigate(`/products/${id}`)}
            >
                <h3>{ name }</h3>
                <ImageContainer>
                    <img src={ image } alt={name} />
                </ImageContainer>
                <TypeLabelContainer types={types} />
                <h3>ID: { id }</h3>
                <InfoContainerStyled>
                    <AspectContainer 
                        height={height}
                        weigth={weigth} 
                    />
                    <BaseStats 
                        stats={stats}
                    />
                </InfoContainerStyled>
            </ContentCardStyled>

            <ButtonStyled whileTap={{ scale: 0.9 }} onClick={() => dispatch(addToCart({ id, name, image, price }))}>
                Add to Cart
                <img src={pokebola} alt="pokebola"/>
                <h3>$ { price }</h3>
            </ButtonStyled>
        </ProductContainerStyled>
    )
}

export default Card;