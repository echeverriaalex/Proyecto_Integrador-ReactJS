import { ButtonStyled } from "./ButtonStyled";

const Button = ({ children, onClick, disabled, background }) => {

    return (
        <ButtonStyled
            onClick={onClick}
            disabled={disabled}
            background={background}
        >
            {children}
        </ButtonStyled>
    );
}

export default Button;