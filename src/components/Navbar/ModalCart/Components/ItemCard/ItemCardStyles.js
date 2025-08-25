import styled from "styled-components";

export const CardCartStyled = styled.div`
    background: white;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 10px;
    border-radius: 10px;
    background:rgba(39, 39, 39, 1);

    img{
        width: 80px;
        height: 80px;
    }
`;

export const DetailsItemContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    
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