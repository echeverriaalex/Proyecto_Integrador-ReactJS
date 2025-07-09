import styled from "styled-components";

export const CategoriesContainerStyled = styled.div`
    display: grid;

    grid-template-columns: repeat(auto-fit, minmax(100px, 160px));
    justify-content: center;
    gap: 10px;
    width: 100%;
    max-width: 1000px;
    padding: 20px;
    overflow-x: auto;
    scrollbar-width: none;
    /*user-select: none;*/
`;

export const CategoryContainerStyled = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px 30px;
    color: #fff;
    border-radius: 10px;
    background:rgb(21, 132, 139);
    text-transform: Capitalize;
    cursor: pointer;
    transition: all 1s ease;
    height: 50px;

    /*
    &:hover{
        scale: 1.1;
    }
    */

    img{
        max-width: 100%;
        max-height: 100%;
    }
`;