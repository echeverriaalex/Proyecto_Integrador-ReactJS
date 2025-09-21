import { NavLink, useNavigate } from "react-router-dom";
import { ImageContainerStyled, SuccessContainerStyled, SuccessfulPageWrapper } from "./SuccessfulPageStyle";
import Button from "../../components/UI/Button/Button";
import { use } from "react";

const SuccessfulPage = () => {

    const navigate = useNavigate();

    return (
        <SuccessfulPageWrapper>
            <SuccessContainerStyled>
                <h2>🎉Successful purchase!🎉</h2>
                <ImageContainerStyled>
                    <img src="https://i.gifer.com/6vw5.gif" alt="Success" />
                </ImageContainerStyled>
                <Button onClick={()=> navigate('/mypurchases')}>Exit</Button>
            </SuccessContainerStyled>
        </SuccessfulPageWrapper>
    );
}

export default SuccessfulPage;