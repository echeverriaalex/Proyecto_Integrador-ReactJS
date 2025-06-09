import styled from "styled-components";


export const ButtonStyled = styled.button`
    padding: 10px 20px;
    border-radius: 10px;
    /*background: #d3852c;*/
    background: ${({ background }) => `${background || '#d3852c'}`};
    color: white;
    font-size: 18px;
    font-weight: 700;
    width: 120px;    
    cursor: pointer;
    border: none;

    &:disabled {
        background: gray;
        cursor: not-allowed;
    }

    background: ${({ background }) => background || 'green'};
`;