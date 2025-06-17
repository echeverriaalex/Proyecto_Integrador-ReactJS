import { AspectContainerStyled } from "./AspectContainerStyles";
import { TfiRuler } from "react-icons/tfi";
import { GiWeight } from "react-icons/gi";

const AspectContainer = ({height, weigth}) =>{
    return(
        <AspectContainerStyled>
            <div>
                <p> { height } </p>
                <TfiRuler size={ 30 } />
                <p> Height </p>
            </div>
            <div>
                <p> { weigth } </p>
                <GiWeight size={ 30 } />
                <p> Weigth </p>
            </div>
        </AspectContainerStyled>
    );
};

export default AspectContainer;