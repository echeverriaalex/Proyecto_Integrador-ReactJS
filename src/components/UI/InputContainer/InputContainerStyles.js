import styled from "styled-components";

export const InputContainerStyled = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 350px;


    p{
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        background-color: #000;
        height: 100%;
        padding: 0px 15px;
    }
   
    /*
    background-color: #ac0c0cff;
    padding: 10px;
    */
`;

export const LabelStyled = styled.label`
    width: 100%;
    padding: 5px;
    color: white;
    font-size: 1rem;
    
`;

export const InputStyled = styled.input`
    padding: 10px;
    font-size: 1rem;
    border-radius: 10px;
    width: 100%;


`;

export const ErrorStyled = styled.p`
    color: red;
    font-size: 0.8rem;
    width: 100%;
`;