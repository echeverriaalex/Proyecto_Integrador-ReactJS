import { NavLink } from "react-router-dom"
import { FormStyled, HeaderStyled, LoginWrapper, RegisterWrapper } from "./RegisterStyles"
import pikachu from "../../assets/images/pikachu.png"


const Register = () => {
    return(
        <RegisterWrapper>
            <HeaderStyled>
                <h2>Register</h2>
                <img src={pikachu} alt="Pikachu"/>
            </HeaderStyled>
            <FormStyled>
                <input type="text" placeholder="Username" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Repeat password" />
                <button type="submit">Register</button>
            </FormStyled>
            <LoginWrapper>
                <p>Already have an account?</p>
                <NavLink to="/login">
                    <button type="button">Login</button>
                </NavLink>
            </LoginWrapper>
        </RegisterWrapper>
    )
}

export default Register