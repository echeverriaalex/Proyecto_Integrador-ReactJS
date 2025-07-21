import InputContainer from "../../UI/InputContainer/InputContainer";
import { ButtonStyled, FormBox, FormStyled, HeaderStyled, RegisterWrapper } from "./LoginFormStyles";
import{ useFormik } from "formik";
import Pokemon from "../../../assets/images/Mew-gif.gif";
import { NavLink } from "react-router-dom";

const LoginForm = () => {

    const { values, handleChange, handleSubmit, errors } = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: (values) => {
            console.log("Form submitted with values:", values);
        }
    });

    console.log("LoginForm values:", values);
    

    return(
        <FormBox>
            <HeaderStyled>
                <h2>Login Form for Formik</h2>
                <img src={Pokemon} alt="Mew" />
            </HeaderStyled>
            
            <FormStyled>
                <InputContainer label="Email" type="email" name="email" value={values.email} onChange={handleChange} isError={errors.email}/>
                <InputContainer label="Password" type="password" name="password" value={values.password} onChange={handleChange} isError={errors.password}/>
                <ButtonStyled type="submit" onClick={handleSubmit}>Iniciar Sesión</ButtonStyled>
            </FormStyled>

            <RegisterWrapper>
                <p>¿No tenés cuenta?</p>
                <NavLink to="/register">
                    <ButtonStyled type="button">Registrarse</ButtonStyled>
                </NavLink>
            </RegisterWrapper>





        </FormBox>
    );
}

export default LoginForm;