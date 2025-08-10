import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import ErrorNotFound from "../pages/ErrorNotFound/ErrorNotFound";
import Register from "../pages/Register/Register";
import About from "../pages/About/About";
import Products from "../pages/Products/Products";
import CategoryPage from "../pages/CategoryPage/CategoryPage";
import CardPage from "../pages/Products/CardPage/CardPage";
import Checkout from "../pages/Checkout/Checkout";

function Routes(){
    return(
        <ReactDomRoutes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/products/:id" element={<CardPage />} />
            <Route path="/pagecategory/:category" element={<CategoryPage />} />
            <Route path="*" element={<ErrorNotFound />} />
        </ReactDomRoutes>
    );
}

export default Routes;