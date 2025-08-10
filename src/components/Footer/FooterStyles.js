import styled from "styled-components";

export const FooterStyled = styled.footer`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    width: 100%;
    padding: 20px;
    background: #a01c05;
    border-top: 1px solid white;
    
    
    h2{
        color: white;
        font-size: 1.5rem;
        text-align: center;
    }
    
    p{
        color: white;
        font-size: 1.4rem;
        text-align: center;
    }

    a{
        font-size: 1.5rem;
        color: #fff;
        font-family: "Bruno Ace", sans-serif;
    }
`;

export const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    gap: 20px;
    max-width: 450px;
    padding: 10px;

    h2{
        color: #fff;
        font-size: 1.2rem;
        text-align: left;
        //background: #1598afff;
        font-family: "Montserrat", sans-serif;
    }

    a{
        font-size: 1.2rem;
    }
`;

export const Project = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    max-width: 1200px;
    padding: 10px;
    background: #e9b46e;

    display: flex;
    width: 250px;
    justify-content: center;
    align-items: center;
    gap: 5px;
    
    padding: 10px;
    border-radius: 8px;

    img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
`;

export const DeveloperContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 10px;

    p{
        font-family: "Caveat", cursive;
    }

    a{
        color: #fff;
        font-weight: bold;
        text-decoration: underline;
        animation: fadeIn .8s ease-in-out infinite alternate;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }   
`;

export const CategoriesFooterSection = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    //background: #53af15ff;
    max-width: 530px;

    h2{
        color: #fff;
        font-size: 1.2rem;
        text-align: left;
        //background: #1598afff;
        font-family: "Montserrat", sans-serif;
    }
`;

export const CategoriesFooterContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 140px));
    gap: 10px;

    p{
        color: #fff;
        font-size: 1rem;
        text-align: center;
        font-family: "Montserrat", sans-serif;
    }

    @media (max-width: 576px) {
        grid-template-columns: repeat(auto-fill, minmax(100px, 120px));
    }
`;