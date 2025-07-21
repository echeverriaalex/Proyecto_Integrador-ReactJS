import styled from "styled-components";

export const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    width: 100%;
    /*
    min-height: 90px;
    padding: 20px;
    */
`;

export const SectionWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    /*min-height: 90px;*/
    width: 100%;
    padding: 40px;

    //background-color: #a1a1a1ff;

    h2{
        color: aliceblue;
    }

    @media (max-width: 576px) {
        padding: 5px;
    }
`;

export const TitleSectionStyled = styled.h2`
    font-family: Montserrat, sans-serif;
    color: #fff;
    font-size: 2rem;
    width: 100%;
    //background-color: #c52d07ff;

    @media (max-width: 576px) {
        font-size: 1.2rem;
    }
`;

export const CardsContainerStyled = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 30px;
    width: 100%;


    @media (max-width: 576px){
        flex-direction: column;
        align-items: center;
        padding: 5px;
    }

`;


export const CardWrapperStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 30px 10px;
    width: 400px;
    width: 100%;
    max-width: 100%;
    background-color: #1a1a1aff;
    background-color: #000000ff;
    border-radius: 10px;

    img{
        max-width: 100%;
        height: 250px;
        border-radius: 8px;
    }

    h2{
        color: #fff;
        padding: 10px;
        width: 100%;
        text-align: center;
        font-size: 1.5rem;
    }

    p{
        color: #fff;
        font-size: 1.2rem;
        padding: 10px;
        text-align: center;
    }

    @media (max-width: 576px){

        h2{
            padding: 5px;
            font-size: 1.2rem;
        }

        img{
            height: 220px;
        }

        p{
            font-size: 1rem;
        }
    
    }
`;

export const LinkButtonStyled = styled.a`
    padding: 20px 50px;
    background-color: #1a1a1aff;
    background-color: #000000ff;
    color: white;
    border-radius: 10px;
    text-decoration: none;
    font-size: 1.4rem;
    font-family: Montserrat, sans-serif;
`;