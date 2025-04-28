import styled from "styled-components";

export const ProductsContainer = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(200px, 300px));
    gap: 20px;
    background: gray;
`;

export const ProductCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s ease-in-out;
    background: lightcoral;
    &:hover {
        transform: scale(1.05);
    }
`;