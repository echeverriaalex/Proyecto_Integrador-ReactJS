import { AspectContainerStyled } from "./AspectContainerStyles";
import { TfiRuler } from "react-icons/tfi";
import { GiWeight } from "react-icons/gi";

const AspectContainer = ({height, weight}) =>{
    return(
        <AspectContainerStyled>
            <div>
                <p> { height } </p>
                <TfiRuler />
                <p> Height </p>
            </div>
            <div>
                <p> { weight } </p>
                <GiWeight />
                <p> Weigth </p>
            </div>
        </AspectContainerStyled>
    );
};

export default AspectContainer;