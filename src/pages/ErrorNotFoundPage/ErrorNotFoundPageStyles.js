import styled from "styled-components";
import { themePage } from "../../components/styles/GlobalStyles";

export const ErrorPageWrapper = styled.div`
    margin-top: ${ themePage.dimensions.marginTop };
    width: ${ themePage.dimensions.width };
    min-height: ${ themePage.dimensions.minHeight };
    max-width: ${ themePage.dimensions.maxWidth };
    display: flex;
    flex-direction: column;
    gap: 40px;
    justify-content: center;
    align-items: center;
    padding: 10px;
`;

export const ImagesContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
    max-width: 400px;

    img {
        width: 100%;
    }
`;

export const TextContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;

    h2, p {
        font-family: montserrat;
        font-size: 1.5rem;
        font-weight: 700;
        margin: 0;
        color: #fff;
        text-align: center;
    }
`;

export const LinksContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    text-align: center;
    color: #fff;
`;