import { useDispatch } from "react-redux";
import pokebola from "../../../assets/images/pokebola.png"
import { ProductCardStyled, ImageContainer, ButtonStyled, CategoryStyled, CategoryContainerStyled, ContentCardStyled, ProductContainerStyled, InfoContainerStyled } from "./CardStyles"
import { addToCart } from "../../../redux/cart/cartSlice";

import BaseStats from "./Components/BaseStats/BaseStats";
import AspectContainer from "./Components/AspectContainer/AspectContainer";

const Card = ({id, name, sprites, weigth, types, height, stats}) =>{
    
    let typeSelected = types[0].type.name;
    const dispatch = useDispatch();
    const image = sprites.other["dream_world"].front_default || sprites.other["official-artwork"].front_default;

  

    const getPriceByCategory = (typeSelected) => {
        switch(typeSelected) {
            case "grass": return 330;
            case "fire": return 800;
            case "water": return 650;
            case "bug": return 200;
            case "normal": return 240;
            case "flying": return 600;
            case "poison": return 450;
            case "electric": return 500;
            case "ground": return 550;
            case "fairy": return 600;
            case "psychic": return 650;
            case "rock": return 700;
            case "ghost": return 750;
            default: return 150; // Default price for unknown types
        }
    }

    const calculateProductPrice = () => {
        return types.reduce((acc, type) => {
            return acc + getPriceByCategory(type.type.name);
        }, 0)
    }

    const price = calculateProductPrice();

    return(
        <ProductContainerStyled>

            <ProductCardStyled>
                <ContentCardStyled key={id} typeSelected={typeSelected}>
                    <h3>{ name }</h3>
                    <ImageContainer>
                        <img src={ image } alt={name} />
                    </ImageContainer>

                    <CategoryContainerStyled>
                        {
                            types.map((item) => (
                                <CategoryStyled type={item.type.name}>
                                    { item.type.name }
                                </CategoryStyled>
                            ))
                        }
                    </CategoryContainerStyled>


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
            </ProductCardStyled>



            <ButtonStyled whileTap={{ scale: 0.9 }} onClick={() => dispatch(addToCart({ id, name, image, price }))}>
                Add to Cart
                <img src={pokebola} alt="pokebola"/>
                <h3>$ { price }</h3>
            </ButtonStyled>
        </ProductContainerStyled>
    )
}

export default Card;