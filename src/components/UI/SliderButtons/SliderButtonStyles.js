import styled from "styled-components";

export const SliderButtonContainerStyled = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ca1212ff;
    cursor: pointer;
    border: none;
    padding: 10px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: white;
    font-size: 2rem;

    @media (max-width: 576px){
        display: none;
    }
`;