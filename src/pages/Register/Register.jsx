import { FormStyled, LoginContainer, RegisterWrapper } from "./RegisterStyles"

const Register = () => {
    return(
        <RegisterWrapper>
            <h2>Register</h2>
            <FormStyled action="/register" method="POST">
                <input type="text" placeholder="Username" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Repeat password" />
                <button type="submit">Register</button>
            </FormStyled>

            <LoginContainer>
                <p>Already have an account?</p>
                <a href="/login">Login</a>
            </LoginContainer>

            

        </RegisterWrapper>
    )
}

export default Register