import { NavLink } from "react-router-dom";
import { FormStyled, HeaderStyled, LoginWrapper, RegisterWrapper } from "./LoginStyles"
//import charizard from "../../assets/images/charizard.png"
import charizard from "../../assets/images/charizard-gif.gif"


const Login = () => {
    return(
        <LoginWrapper>
            <HeaderStyled>
                <h2>Login</h2>
                <img src="https://i.gifer.com/9M4X.gif" alt="Charizard" />
            </HeaderStyled>
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
        </LoginWrapper>
    )
}

export default Login;