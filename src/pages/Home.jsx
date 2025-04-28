import Products from "../components/Products/Products"
import { HomeWrapper, ProductsWrapper } from "./HomeStyles"

const Home = () => {
    return (
        <HomeWrapper>


            <ProductsWrapper>
                <h2>Products</h2>
                <Products />

            </ProductsWrapper>

            

        </HomeWrapper>
    )
}

export default Home;