import styled from "styled-components";

export const PurchasesContainerStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 20px;

    background-color: #1950c7ff;
    width: 100%;
    min-height: 60vh;
`;

export const OrderContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    //align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;

    background-color: #055551ff;

    h2, h3, p {
        color: white;
        font-weight: 500;
        font-size: 1.2rem;
        font-family: Montserrat, sans-serif;
    }
`;