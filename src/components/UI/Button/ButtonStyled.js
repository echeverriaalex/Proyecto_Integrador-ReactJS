import { line } from "framer-motion/client";
import styled from "styled-components";

export const ButtonStyled = styled.button`
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    padding: 10px 15px;
    border-radius: 10px;
    color: white;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
    border: none;
    width: ${({ width }) => width || '100%'};
    max-width: ${({ maxWidth }) => maxWidth || '250px'};
    background: ${({ background }) => background || 'linear-gradient(90deg, #d98321, #a01c05)'};
    
    &:disabled {
        background: gray;
        cursor: not-allowed;
    }
`;