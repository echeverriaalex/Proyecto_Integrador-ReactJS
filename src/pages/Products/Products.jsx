import CardsContainer from "../../components/Products/CardsContainer/CardsContainer";
import { SectionWrapper } from "../Home/HomeStyles";

const Products = () => {
  return (
    <>  
      <SectionWrapper>
          <h2>Pokémon cards</h2>
          <CardsContainer />
      </SectionWrapper>
    </>
  );
}

export default Products;