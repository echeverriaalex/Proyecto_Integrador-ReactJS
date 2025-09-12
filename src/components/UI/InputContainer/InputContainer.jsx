import { ErrorMessage, Field } from "formik";
import { InputContainerStyled, InputStyled, ErrorMessageStyled } from "./InputContainerStyles";

const InputContainer = ({ type, placeholder, name }) => {
  return (
    <Field name={name}>
      {( { field, form: { errors, touched } } ) => (
        <InputContainerStyled>
          <InputStyled
            type={type}
            placeholder={placeholder}
            {...field}
            isError={errors[field.name] && touched[field.name]}
          />

          <ErrorMessage name={field.name}>
            {(message) => <ErrorMessageStyled>{message}</ErrorMessageStyled>}
          </ErrorMessage>
        </InputContainerStyled>
      )}
    </Field>
  );
}

export default InputContainer;