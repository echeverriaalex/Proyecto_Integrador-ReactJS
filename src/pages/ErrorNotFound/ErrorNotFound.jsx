import { useNavigate } from "react-router-dom";
import { ErrorWrapper, ImagesContainerStyled, LinksContainerStyled, TextContainerStyled } from "./ErrorNotFoundStyles";
import Button from "../../components/UI/Button/Button"

const ErrorNotFound = () => {

    const navigate = useNavigate();

    return(
        <ErrorWrapper>
            <ImagesContainerStyled>
                <img src="https://i.gifer.com/5SvD.gif" alt="404 Not Found" />
            </ImagesContainerStyled>
            <TextContainerStyled>
                <h2>¡UPPPSS! that was a Error 404</h2>
                <p>Page Not Found</p>
            </TextContainerStyled>
            <LinksContainerStyled>
                <Button onClick={() => navigate("/")}>Go Home</Button>
            </LinksContainerStyled>
        </ErrorWrapper>
    )
}

export default ErrorNotFound;