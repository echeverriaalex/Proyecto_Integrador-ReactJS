import styled from "styled-components";
import { HiOutlineShoppingCart } from "react-icons/hi";

export const CartIconStyled = styled(HiOutlineShoppingCart)`
    font-size: 1.5rem;
    color: white;
    cursor: pointer;
    user-select: none;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const IconContainerStyled = styled.div`
    position: relative;
    font-size: 1.2rem;
    display: flex;

    p{
        position: absolute;
        top: -15px;
        right: -8px;
        color: #fff;
        background: #000;
        padding: 5px 8px;
        border-radius: 10px;
        font-size: 0.8rem;
        cursor: pointer;
        user-select: none;
    }
`;