import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import ErrorNotFound from "../pages/ErrorNotFound/ErrorNotFound";
import Register from "../pages/Register/Register";

function Routes(){
    return(
        <ReactDomRoutes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<ErrorNotFound />} />
        </ReactDomRoutes>
    );
}

export default Routes;