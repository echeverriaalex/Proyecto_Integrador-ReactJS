import styled from "styled-components";

export const SuccessfulPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 70vh;
    width: 100%;
    max-width: 1600px;
    padding: 10px;
`;

export const SuccessContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 10px;
    border: 1px solid #4caf50;
    border-radius: 8px;
    background: linear-gradient(130deg, #1c3526ff, #0eb408ff);
    height: 100%;
    width: 100%;
    max-height: 300px;

    h2{
        font-size: 3rem;
        text-align: center;
        color: white;
        font-family: 'Montserrat', sans-serif;
    }

    @media (max-width: 576px){
        height: 70vh;

        h2{
            font-size: 1.5rem;
        }

        img{
            max-width: 100%;
        }
    }
`;

export const ImageContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        width: 100%;
        max-width: 300px;
    }
`;

