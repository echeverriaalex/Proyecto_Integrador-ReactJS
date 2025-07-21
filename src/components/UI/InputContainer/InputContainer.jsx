import { InputContainerStyled, InputStyled, LabelStyled } from "./InputContainerStyles";

const InputContainer = ({ label, type, name, ...field }) => {
  return (
    <InputContainerStyled>
        { /* <LabelStyled htmlFor={label}>{label}</LabelStyled> */ }
        
        <InputStyled type={type} id={label} placeholder={label} name={name} {...field} />
        
        { type == "password" && <p>Mostrar</p> }
        { false && <ErrorStyled>Error</ErrorStyled>}
    </InputContainerStyled>
  );
}

export default InputContainer;