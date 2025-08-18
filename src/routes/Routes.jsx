import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import ErrorNotFound from "../pages/ErrorNotFound/ErrorNotFound";
import Register from "../pages/Register/Register";
import About from "../pages/About/About";
import CategoryPage from "../pages/CategoryPage/CategoryPage";
import CardPage from "../pages/ProductsPage/CardPage/CardPage";
import Checkout from "../pages/Checkout/Checkout";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import MyCartPage from "../pages/MyCartPage/MyCartPage";

function Routes(){
    return(
        <ReactDomRoutes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/mycart" element={<MyCartPage />} />
            <Route path="/products/:id" element={<CardPage />} />
            <Route path="/pagecategory/:category" element={<CategoryPage />} />
            <Route path="*" element={<ErrorNotFound />} />
        </ReactDomRoutes>
    );
}

export default Routes;