import { SliderButtonContainerStyled } from "./SliderButtonStyles";
import { IoIosArrowBack } from "react-icons/io";

const SliderButtonLeft = ({ onClick }) => {
    return (
        <SliderButtonContainerStyled onClick={onClick} whileTap={{ scale: 0.8 }}>
            <IoIosArrowBack />
        </SliderButtonContainerStyled>
    );
};

export default SliderButtonLeft;