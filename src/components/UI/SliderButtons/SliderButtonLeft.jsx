import { SliderButtonContainerStyled } from "./SliderButtonStyles";
import { IoIosArrowBack } from "react-icons/io";

const SliderButtonLeft = ({ onClick }) => {
    return (
        <SliderButtonContainerStyled onClick={onClick}>
            <IoIosArrowBack />
        </SliderButtonContainerStyled>
    );
};

export default SliderButtonLeft;