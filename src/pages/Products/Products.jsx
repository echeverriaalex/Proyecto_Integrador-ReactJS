import CardsContainer from "../../components/Products/CardsContainer/CardsContainer";
import { ProductsWrapper } from "../Home/HomeStyles";

const Products = () => {
  return (
    <>
        <div>
        <h1>Products Page</h1>
        <p>This is the products page where you can find various items.</p>
        </div>
        
        <ProductsWrapper>
            <h2>Pokémon cards</h2>
            <CardsContainer />
        </ProductsWrapper>
    </>
  );
}

export default Products;