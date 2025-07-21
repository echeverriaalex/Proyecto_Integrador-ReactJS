import { NavLink } from "react-router-dom";
import { FormStyled, HeaderStyled, LoginWrapper, RegisterWrapper } from "./LoginStyles"
//import charizard from "../../assets/images/charizard.png"
import Pokemon from "../../assets/images/Mew-gif.gif";

import LoginForm from "../../components/Users/LoginForm/LoginForm";


const Login = () => {
    return(
        <LoginWrapper>
            <FormStyled>
                <input type="text" placeholder="Usuario" />
                <input type="password" placeholder="Contraseña" />
                <button type="submit">Iniciar Sesión</button>
            </FormStyled>
            <RegisterWrapper>
                <p>¿No tenés cuenta?</p>
                <NavLink to="/register">
                    <button type="button">Registrarse</button>
                </NavLink>
            </RegisterWrapper>

            <LoginForm />


        </LoginWrapper>
    )
}

export default Login;