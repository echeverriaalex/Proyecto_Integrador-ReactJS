import styled from "styled-components";

export const CardPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;    
    justify-content: center;
    padding: 20px;
    background-color: #f0f0f0;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    border-radius: 30px;
`;

export const ProductContainerStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    background-color: lightblue;
    padding: 20px;
    border-radius: 30px;
`;

export const InfoContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding: 20px;

    
    h2, p{
        font-weight: 700;
        font-family: monospace, 'Arial', sans-serif;
    }
    
    h2{
        text-transform: uppercase;    
    }
`;

export const ImageContainerStyled = styled.div`
    background-color: lightgreen;
    padding: 10px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 400px;

    img {
        max-width: 100%;
        max-height: 100%;
    }
`;