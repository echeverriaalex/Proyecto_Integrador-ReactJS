import { useNavigate } from "react-router-dom";
import { ErrorPageWrapper, ImagesContainerStyled, LinksContainerStyled, TextContainerStyled } from "./ErrorNotFoundPageStyles";
import Button from "../../components/UI/Button/Button"

const ErrorNotFoundPage = () => {

    const navigate = useNavigate();

    return(
        <ErrorPageWrapper>
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
        </ErrorPageWrapper>
    )
}

export default ErrorNotFoundPage;