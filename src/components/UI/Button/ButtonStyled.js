import styled from "styled-components";

export const ButtonStyled = styled.button`
    padding: 10px 15px;
    border-radius: 10px;
    /*background: #d3852c;*/
    background: ${({ background }) => `${background || '#d3852c'}`};
    color: white;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
    border: none;

    &:disabled {
        background: gray;
        cursor: not-allowed;
    }

    background: ${({ background }) => background || 'green'};
`;