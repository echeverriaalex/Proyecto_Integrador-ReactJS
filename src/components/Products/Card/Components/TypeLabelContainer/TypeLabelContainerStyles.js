import styled from 'styled-components';
import { getCategoryColorByCategory } from "../../../../../utils/setColorBackground";

export const CategoryContainerStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
`;

export const CategoryStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;    
    padding: 10px 15px;
    border-radius: 10px;
    background: ${({ type }) => getCategoryColorByCategory(type)};
    
    p{
        font-size: 1.1rem;
        font-family: "Times New Roman";
        font-weight: 600;
        text-transform: capitalize;
        color: white;
    }

    img{
        height: 20px;
    }
`;