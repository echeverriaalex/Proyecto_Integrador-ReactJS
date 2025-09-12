import { useLocation } from "react-router-dom";
import { LayoutWrapper } from "./LayoutStyles"
import { useEffect } from "react";

const Layout = ({children}) => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Aquí puedes agregar lógica que dependa de la ruta
        //console.log("Ruta actual:", pathname);
        window.scrollTo(0, 0); // Scroll to top on route change
    }, [pathname]);

    return <LayoutWrapper> {children} </LayoutWrapper>
}

export default Layout;