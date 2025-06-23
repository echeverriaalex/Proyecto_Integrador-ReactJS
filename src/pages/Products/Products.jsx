import CardsContainer from "../../components/Products/CardsContainer/CardsContainer";
import { SectionWrapper } from "../Home/HomeStyles";

const Products = () => {
  return (
    <>
        <div>
        <h1>Products Page</h1>
        <p>This is the products page where you can find various items.</p>
        </div>
        
        <SectionWrapper>
            <h2>Pokémon cards</h2>
            <CardsContainer />
        </SectionWrapper>
    </>
  );
}

export default Products;