import styled from "styled-components";

export const ProductsPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 10px;
    min-height: 90vh;

    @media (max-width: 576px){
        gap: 5px;
    }
`;

export const HeroPageStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 600px;
    background-image: url(${({ wallpaper }) => wallpaper});
    background-size: cover;

    @media (max-width: 1000px){
       min-height: 400px;
    }

    @media (max-width: 576px){
        min-height: 250px;
    }
`;

export const TextContainerStyled = styled.div`
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    background: #00000080;
    width: 100%;
    
    h2, p{
        color: white;
        font-size: 3rem;
    }

    h2{
        font-size: 10rem;
        text-transform: uppercase;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    p{
        font-size: 3rem;
    }

    @media (max-width: 1000px){
        gap: 20px;

        p{
            font-size: 2rem;
        }

        h2{
            font-size: 5rem;
        }
    }

    @media (max-width: 576px){
        gap: 20px;

        p{
            font-size: 1.3rem;
        }

        h2{
            font-size: 3rem;
        }
    }
`;

export const CatalogWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 10px;

    @media(max-width: 1000px){
        padding: 30px 10px;
    }

    @media(max-width: 576px){
        padding: 5px;
    }
`;

export const ContainerButtonsStyled = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    width: 100%;
    padding: 20px;
`;