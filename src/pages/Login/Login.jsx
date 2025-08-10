import InputContainer from "../../components/UI/InputContainer/InputContainer"
import { ButtonStyled, FormBox, FormStyled, HeaderStyled, LoginWrapper, RegisterWrapper } from "./LoginStyles";
import{ useFormik } from "formik";
import Pokemon from "../../assets/images/Mew-gif.gif";
import { NavLink } from "react-router-dom";

const Login = () => {

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
        <LoginWrapper>
            <FormBox>
                <HeaderStyled>
                    <img src={Pokemon} alt="Mew" />
                </HeaderStyled>
                <FormStyled>
                    <InputContainer label="Email" type="email" name="email" value={values.email} onChange={handleChange} isError={errors.email}/>
                    <InputContainer label="Password" type="password" name="password" value={values.password} onChange={handleChange} isError={errors.password}/>
                    <ButtonStyled type="submit" onClick={handleSubmit}>Log in</ButtonStyled>
                </FormStyled>
                <RegisterWrapper>
                    <p>Are you new?</p>
                    <NavLink to="/register">
                        <ButtonStyled type="button">Register</ButtonStyled>
                    </NavLink>
                </RegisterWrapper>
            </FormBox>
        </LoginWrapper>
    );
}

export default Login;