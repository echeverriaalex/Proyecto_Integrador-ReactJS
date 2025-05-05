import pokebola from "../../assets/images/pokebola.png"
import { ProductCardStyled, ImageContainer, ButtonStyled, CategoryStyled, CategoryContainerStyled, ContentCardStyled, ProductContainerStyled } from "./ProductCardStyles"


const ProductCard = ({id, name, sprites, weigth, types }) =>{
    let typeSelected = types[0].type.name;

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

    return(
        <ProductContainerStyled>
            <ProductCardStyled>
                <ContentCardStyled key={id} typeSelected={typeSelected}>
                    <h3>{ name }</h3>
                    <ImageContainer>
                        <img src={sprites.front_default} alt={name} />
                    </ImageContainer>
                    <h3>ID: { id }</h3>
                    <p> weigth: { weigth } </p>
                    <CategoryContainerStyled>
                        {
                            types.map((item) => (
                                <li key={item.type.name}>
                                    <CategoryStyled type={item.type.name}>
                                        { item.type.name }
                                    </CategoryStyled>
                                </li>
                            ))
                        }
                    </CategoryContainerStyled>
                    
                </ContentCardStyled>
            </ProductCardStyled>
            <ButtonStyled whileTap={{ scale: 0.8 }}>
                Add to Cart
                <img src={pokebola} alt="pokebola"/>
                <h3>
                    $ { calculateProductPrice() }
                </h3>

            </ButtonStyled>
        </ProductContainerStyled>
    )
}

export default ProductCard;