import { IoIosArrowForward } from "react-icons/io";
import { SliderButtonContainerStyled } from "./SliderButtonStyles";

const SliderButtonRight = ({ onClick }) => {
    return (
        <SliderButtonContainerStyled onClick={onClick}>
            <IoIosArrowForward />
        </SliderButtonContainerStyled>
    );
};

export default SliderButtonRight;