import { IoIosArrowForward } from "react-icons/io";
import { SliderButtonContainerStyled } from "./SliderButtonStyles";

const SliderButtonRight = ({ onClick }) => {
    return (
        <SliderButtonContainerStyled onClick={onClick} whileTap={{ scale: 0.8 }}>
            <IoIosArrowForward />
        </SliderButtonContainerStyled>
    );
};

export default SliderButtonRight;