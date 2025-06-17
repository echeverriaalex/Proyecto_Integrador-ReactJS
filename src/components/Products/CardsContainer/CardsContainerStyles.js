import styled from "styled-components";

export const ProductsContainer = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(200px, 300px));
    gap: 15px;
    row-gap: 40px;
    width: 100%;
    max-width: 1400px;
    justify-content: center;
    /*background: gray;*/
    padding: 20px;

    @media (max-width: 576px){
        padding: 10px;
        grid-template-columns: repeat(auto-fit, minmax(200px, 100%));
    }
`;