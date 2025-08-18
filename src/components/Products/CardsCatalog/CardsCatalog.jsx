import { forwardRef } from "react";
import Card from "../Card/Card";
import { CardsCatalogStyled } from "./CardsCatalogStyle";
import { calculateProductPrice } from "../../../utils/setPricePokemonByType";

const CardsCatalog = forwardRef(({ productsList }, ref) => {
    return(
        <CardsCatalogStyled ref={ref}>
            {
                productsList.length > 0 ? (
                    productsList.map((item) => (
                        <Card
                            key = {item.id}
                            id = {item.id}
                            name = {item.name}
                            sprites = {item.sprites}
                            weight = {item.weight}
                            types = {item.types}
                            height = {item.height}
                            stats = {item.stats}
                            price = { calculateProductPrice(item.types) }
                        /> 
                    )))
                : 
                ( <h2>No products found.</h2> )
            }
        </CardsCatalogStyled>
    )
});

export default CardsCatalog;