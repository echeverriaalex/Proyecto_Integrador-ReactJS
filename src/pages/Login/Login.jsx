import InputContainer from "../../components/UI/InputContainer/InputContainer"
import { Form, FormContainerStyled, HeaderStyled, LoginWrapper, RegisterWrapper } from "./LoginStyles";
import{ Formik } from "formik";
import Pokemon from "../../assets/images/Mew-gif.gif";
import { NavLink } from "react-router-dom";
import useRedirect from "../../hooks/useRedirect";
import { useDispatch } from "react-redux";
import { loginInitialValues } from "../../formik/initialValue";
import { loginValidationSchema } from "../../formik/validationSchema";
import { loginUser } from "../../axios/axios-users";
import { setCurrentUser } from "../../redux/users/userSlice";
import { ButtonStyled } from "../../components/UI/Button/ButtonStyled";

const Login = () => {

    const dispatch = useDispatch();
    useRedirect("/profile");  

    return(
        <LoginWrapper>
            <FormContainerStyled>
                <HeaderStyled>
                    <img src={Pokemon} alt="Mew" />
                </HeaderStyled>
                <Formik
                    initialValues={ loginInitialValues }
                    validationSchema={ loginValidationSchema }
                    onSubmit={async (values) => {
                        const user = await loginUser(values.email, values.password)
                        dispatch(setCurrentUser({
                            ...user.usuario,
                            token: user.token
                        }))
                    }}
                >
                    <Form>
                        <InputContainer name="email" type="email" placeholder="Email" />
                        <InputContainer name="password" type="password" placeholder="Password" />
                        <ButtonStyled>Log in</ButtonStyled>
                    </Form>
                </Formik>
                <RegisterWrapper>
                    <NavLink to="/register">
                        <p>Don't have an account yet?</p>
                        <span>Sign up</span>
                    </NavLink>
                </RegisterWrapper>
            </FormContainerStyled>
        </LoginWrapper>
    );
}

export default Login;