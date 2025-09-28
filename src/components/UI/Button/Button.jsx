import { ButtonStyled } from "./ButtonStyled";

const Button = ({ children, onClick, disabled, background, maxWidth }) => {

    return (
        <ButtonStyled
            onClick={onClick}
            disabled={disabled}
            background={background}
            maxWidth={maxWidth}
        >
            {children}
        </ButtonStyled>
    );
}

export default Button;