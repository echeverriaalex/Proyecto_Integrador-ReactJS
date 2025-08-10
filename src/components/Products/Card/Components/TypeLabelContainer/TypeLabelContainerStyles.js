import styled from 'styled-components';
import { colorCategory } from "../../../../../utils/setColorBackground";

export const CategoryContainerStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 5px;
    
    @media (max-width: 1000px) {
        height: 90px;
    }

    @media (max-width: 576px) {
        width: 100%;
        
    }
`;

export const CategoryStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;    
    padding: 10px 15px;
    border-radius: 10px;
    background: ${({ type }) => colorCategory[type]};
    height: 40px;

    p{
        font-size: 1rem;
        font-family: "Times New Roman";
        font-weight: 600;
        text-transform: capitalize;
        color: white;
    }

    img{
        height: 20px;
    }

    @media (max-width: 576px) {
        width: 100%;
    }
`;