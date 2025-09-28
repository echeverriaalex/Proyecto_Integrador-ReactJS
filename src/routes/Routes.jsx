import { Routes as ReactDomRoutes, Route } from "react-router-dom";

import Login from "../pages/Login/Login";
import ErrorNotFound from "../pages/ErrorNotFound/ErrorNotFound";
import Register from "../pages/Register/Register";
import About from "../pages/About/About";
import CategoryPage from "../pages/CategoryPage/CategoryPage";
import CardPage from "../pages/ProductsPage/CardPage/CardPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import MyCartPage from "../pages/MyCartPage/MyCartPage";
import UserPage from "../pages/UserPage/UserPage";
import CheckoutPage from "../pages/CheckoutPage/CheckoutPage";
import HomePage from "../pages/HomePage/HomePage";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import SuccessfulPage from "../pages/SuccessfulPage/SuccessfulPage";
import MyPurchasesPage from "../pages/MyPurchasesPage/MyPurchasesPage";
import OrderDetailsPage from "../pages/OrderDetailsPage/OrderDetailsPage";

function Routes(){
    return(
        <ReactDomRoutes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<UserPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/mypurchases" element={<MyPurchasesPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/successful" element={<SuccessfulPage />} />
            <Route path="/products/:id" element={<CardPage />} />
            <Route path="/pagecategory/:category" element={<CategoryPage />} />
            <Route path="/orderdetails/:id" element={<OrderDetailsPage />} />

            <Route 
                path="/mycart" 
                element={
                    <ProtectedRoute redirectTo={'/login'}>
                        <MyCartPage />
                    </ProtectedRoute>
                } 
            />

            <Route path="*" element={<ErrorNotFound />} />
        </ReactDomRoutes>
    );
}

export default Routes;