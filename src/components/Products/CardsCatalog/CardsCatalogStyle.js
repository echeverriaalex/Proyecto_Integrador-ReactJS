import styled from "styled-components";

export const CardsCatalogStyled = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(200px, 260px));
    gap: 10px;
    row-gap: 40px;
    width: 100%;
    max-width: 1400px;
    justify-content: center;
    padding: 10px;

    @media (max-width: 1000px){
        row-gap: 20px;
        grid-template-columns: repeat(auto-fit, minmax(150px, 320px));
        
    }

    @media (max-width: 576px){
        padding: 10px;
        grid-template-columns: repeat(auto-fit, minmax(150px, 100%));
    }
`;