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

    p{
        width: 100%;
        text-align: left;
    }
`;