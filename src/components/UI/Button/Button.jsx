import { ButtonStyled } from "./ButtonStyled";

const Button = ({ children, onClick, type = "button", className }) => {

    return (
        <ButtonStyled
            type={type}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
            onClick={onClick}
        >
            {children}
        </ButtonStyled>
    );
}

export default Button;