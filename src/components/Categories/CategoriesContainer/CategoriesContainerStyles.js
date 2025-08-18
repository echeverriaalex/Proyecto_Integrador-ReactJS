import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SliderCategoriesContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    width: 100%;
`;

export const CategoriesContainerStyled = styled.div`
    display: flex;
    gap: 10px;
    width: 100%;
    padding: 20px 10px;
    overflow: auto;

    &::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Edge */
        }
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE y Edge antiguos */

    @media (max-width: 576px) {
        gap: 5px;
        padding: 0px 5px;

        &::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Edge */
        }
        scrollbar-width: none; /* Firefox */
        -ms-overflow-style: none; /* IE y Edge antiguos */
    }
`;

export const CategoryContainerStyled = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    user-select: none;
    color: #fff;
    font-family: "Monserrat", sans-serif;
    background-color: #131313ff;
    background-color: #070707;
    text-transform: Capitalize;
    border-radius: 60px 20px 60px 20px;
    min-width: 130px;
    min-height: 130px;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: #202020;
        border-radius: 50%;
    }

    @media (max-width: 1000px) {
        min-width: 110px;
        min-height: 110px;
        border-radius: 35px 15px 40px 10px;
    }

    @media (max-width: 576px) {
        min-width: 100px;
        min-height: 100px;
        border-radius: 35px 15px 40px 10px;
    }
`;

export const ImageContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    //background: #2c2c2cff;
    border-radius: 50%;
    user-select: none;

    img{
        max-width: 100%;
        max-height: 100%;
        //object-fit: cover;
    }

    @media (max-width: 576px) {
        width: 40px;
        height: 40px;
    }
`;