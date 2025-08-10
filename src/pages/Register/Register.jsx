
//import { FormStyled, HeaderStyled, LoginWrapper, RegisterWrapper } from "./RegisterStyles"
//import Pokemon from "../../assets/images/pikachu.png"
import Pokemon from "../../assets/images/pikachu.gif"

import InputContainer from "../../components/UI/InputContainer/InputContainer"
import { ButtonStyled, FormBox, FormStyled, HeaderStyled, LoginWrapper, RegisterWrapper } from "./RegisterStyles";
import{ useFormik } from "formik";
import { NavLink } from "react-router-dom";

const Register = () => {
    const { values, handleChange, handleSubmit, errors } = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: ""
        },
        onSubmit: (values) => {
            console.log("Form submitted with values:", values);
        }
    });

    return(
        <RegisterWrapper>
            <FormBox>
                <HeaderStyled>
                    <img src={Pokemon} alt="pikachu" />
                </HeaderStyled>
                <FormStyled>
                    <InputContainer label="Name" type="text" name="name" value={values.name} onChange={handleChange} isError={errors.name}/>
                    <InputContainer label="Email" type="email" name="email" value={values.email} onChange={handleChange} isError={errors.email}/>
                    <InputContainer label="Password" type="password" name="password" value={values.password} onChange={handleChange} isError={errors.password}/>
                    <ButtonStyled type="submit" onClick={handleSubmit}>Register</ButtonStyled>
                </FormStyled>
                <LoginWrapper>
                    <p>Do you already have an account?</p>
                    <NavLink to="/login">
                        <ButtonStyled type="button">Login</ButtonStyled>
                    </NavLink>
                </LoginWrapper>
            </FormBox>
        </RegisterWrapper>
    )
}

export default Register