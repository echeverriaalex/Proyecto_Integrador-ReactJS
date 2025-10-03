import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import CategoryPage from "../pages/CategoryPage/CategoryPage";
import CardPage from "../pages/ProductsPage/CardPage/CardPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import MyCartPage from "../pages/MyCartPage/MyCartPage";
import HomePage from "../pages/HomePage/HomePage";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import SuccessfulPage from "../pages/SuccessfulPage/SuccessfulPage";
import MyPurchasesPage from "../pages/MyPurchasesPage/MyPurchasesPage";
import OrderDetailsPage from "../pages/OrderDetailsPage/OrderDetailsPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import AboutPage from "../pages/AboutPage/AboutPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import ErrorNotFoundPage from "../pages/ErrorNotFoundPage/ErrorNotFoundPage";

function Routes(){
    return(
        <ReactDomRoutes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/mypurchases" element={<MyPurchasesPage />} />
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

            <Route path="*" element={<ErrorNotFoundPage />} />
        </ReactDomRoutes>
    );
}

export default Routes;