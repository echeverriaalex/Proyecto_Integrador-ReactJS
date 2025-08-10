import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavLinkStyled = styled(NavLink)`
    padding: 10px 20px;
    font-weight: 700;
    font-size: 1rem;
    text-align: center;
    color: white;
    display: flex;
    gap: 8px;
    
    &:hover {
        transition: all .5s;
        border-radius: 5px;
        background: #571105ff;
        text-decoration: underline;
        text-underline-offset: 5px; /* ajusta la separación */
    }

    img{
        width: 1rem;
    }

    /*
    @media (max-width: 882px){
        //background: #04a3d4ff;
        display: grid;
        flex-wrap: unset;
        grid-template-columns: repeat(auto-fit, 120px);
        width: 100%;
    }

    @media (max-width: 576px){
        flex-direction: column;
        text-align: start;
        justify-content: start;
        width: 100%;
    }
    */
`;