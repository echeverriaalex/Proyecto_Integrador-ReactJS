import { Formik } from "formik";
import Pokemon from "../../assets/images/pikachu.gif"
import InputContainer from "../../components/UI/InputContainer/InputContainer"
import { registerInitialValues } from "../../formik/initialValue";
import { registerValidationSchema } from "../../formik/validationSchema";
import { Form, FormContainerStyled, HeaderStyled, LoginWrapper, RegisterWrapper } from "./RegisterPageStyles";
import { NavLink } from "react-router-dom";
import { createUser } from "../../axios/axios-users";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../redux/users/userSlice";
import useRedirect from "../../hooks/useRedirect";
import { ButtonStyled } from "../../components/UI/Button/ButtonStyled";

const RegisterPage = () => {

    const dispatch = useDispatch();
    useRedirect("/");

    return(
        <RegisterWrapper>
            <FormContainerStyled>
                <HeaderStyled>
                    <img src={Pokemon} alt="pikachu" />
                </HeaderStyled>
                {/* Form Section, Formik solo permite un unico hijo un form de Formik*/}
                <Formik
                    initialValues={ registerInitialValues }
                    validationSchema={ registerValidationSchema }
                    onSubmit={async (values, actions) => {
                        console.log("Form submitted with values:", values);
                        const user = await createUser(
                            values.name,
                            values.email,
                            values.password
                        )

                        if(user){
                            console.log("user de la api --> " ,user);
                            dispatch(setCurrentUser({...user.usuario}))
                        }

                        actions.resetForm();
                    }}
                >   
                    <Form>
                        <InputContainer name='name' type="text" placeholder="Name" />
                        <InputContainer name='email' type="email" placeholder="Email" />
                        <InputContainer name='password' type="password" placeholder="Password" />
                        <ButtonStyled type="submit">Register</ButtonStyled>
                    </Form>
                </Formik>
                <LoginWrapper>                    
                    <NavLink to="/login">
                        <p>Do you already have an account?</p>
                        <span>Login</span>
                    </NavLink>
                </LoginWrapper>
            </FormContainerStyled>
        </RegisterWrapper>
    )
}

export default RegisterPage;