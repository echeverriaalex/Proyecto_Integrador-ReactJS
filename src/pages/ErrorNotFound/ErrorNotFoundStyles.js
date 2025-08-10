import styled from "styled-components";

export const ErrorWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    justify-content: center;
    align-items: center;
    min-height: 70vh;
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