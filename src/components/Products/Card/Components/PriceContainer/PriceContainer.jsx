import  { calculateProductPrice } from "../../../../../utils/setPricePokemonByType"
import { PriceContainerStyled } from "./PriceContainerStyles";

const PriceContainer = ({ types = [], price, discount }) => {

    //const finalPrice = discount ? price - (price * (discount / 100)) : price;

    const finalPrice = calculateProductPrice(types);

    return (
        <PriceContainerStyled>
            <h3>${finalPrice.toFixed(2)}</h3>

            { /* discount && <span className="original-price">${price.toFixed(2)}</span> */}
        </PriceContainerStyled>
    );
}

export default PriceContainer;