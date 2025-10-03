import styled from "styled-components";
import { themePage } from "../../components/styles/GlobalStyles";

export const CategoryPageWrapper = styled.div`
    margin-top: ${ themePage.dimensions.marginTop };
    width: ${ themePage.dimensions.width };
    min-height: ${ themePage.dimensions.minHeight };
    max-width: ${ themePage.dimensions.maxWidth };
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

export const HeroCategoryPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:rgb(21, 98, 117);
    width: 100%;
    min-height: 500px;
    background-image: url(${({ category }) => category});
    background-size: cover;
    background-repeat: no-repeat;

    @media (max-width: 882px){
       min-height: 350px;
       background-position: bottom;
    }

    @media (max-width: 576px){
        min-height: 250px;
        background-position: center;
    }
`;

export const TextCategoryContainerStyled = styled.div`
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    
    p{
        color: white;
        font-size: 3rem;
    }

    h2{
        color: white;
        font-size: 10rem;
        text-transform: uppercase;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 882px){
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