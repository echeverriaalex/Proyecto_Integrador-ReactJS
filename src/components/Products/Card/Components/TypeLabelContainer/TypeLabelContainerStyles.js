import styled from 'styled-components';
import { getCategoryColorByCategory } from "../../../../../utils/setColorBackground";

export const CategoryContainerStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
`;

export const CategoryStyled = styled.p`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 16px;
    font-family: "Times New Roman";
    font-weight: bold;
    padding: 10px 20px;
    border-radius: 20px;
    background: ${({ type }) => getCategoryColorByCategory(type)};
    color: white;
    text-transform: capitalize;

    img{
        height: 30px;
    }
`;