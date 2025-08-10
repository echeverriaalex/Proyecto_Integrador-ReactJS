import styled from "styled-components";
import { HiOutlineSearch } from "react-icons/hi";

export const SearchContainerStyled = styled.div`
    background: #e2e2e2ff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 10px;
    //border: 1px solid black;
    border-radius: 30px;
    width: 100%;
    min-width: 200px;
    max-width: 400px;
    height: 40px;

    @media (max-width: 882px){
        max-width: 200px;
    }
    
    @media (max-width: 576px){
        width: 100%;
        max-width: unset;
        //padding: 0px;
    }
`;

export const SearchBarStyled = styled.input`
    width: 100%;
    padding: 5px 10px;
    font-size: .8rem;
    border-radius: 5px;
    border: none;
    background: transparent;
    outline: none; /* Elimina el borde azul predeterminado */
`;

export const SearchIconStyled = styled(HiOutlineSearch)`
    font-size: 2rem;
    color: white;
    cursor: pointer;    
    user-select: none;
    
    padding: 0px;
    margin: 0px;
    height: 100%;
    max-height: 20px;
    width: 100%
    max-width: 20px;
    display: flex;
    align-items: center;
    color: #000;

    //background: #101010;
`;