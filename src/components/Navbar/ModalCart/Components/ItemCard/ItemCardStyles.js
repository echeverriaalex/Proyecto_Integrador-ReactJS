import styled from "styled-components";

export const CardCartStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    width: 100%;
    height: 140px;
    padding: 5px;
    border-radius: 10px;
    background: #272727ff;
`;

export const ImageContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35%;
    height: 100%;
    
    img{
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;    
    }
`;

export const DetailsItemContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    height: 100%;
    
    h3{
        text-transform: capitalize;
        font-size: 1.5rem;
        color: #fff;
    }

    p{
        display: block;
        font-size: 1.4rem;
        color: #fff;
        font-weight: 600;
    }
`;

export const ButtonsContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
`;