import styled from "styled-components";

export const HeaderStyled = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    height: 70px;    
    /*background: #ac12c0;
    background: transparent;*/
    border-bottom: 1px solid white;
    @media (max-width: 768px){
        padding: 1rem 2rem;
    }

    @media (max-width: 576px){
        padding: 0;
    }
`;

export const NavbarContainerStyled = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;    
    padding: 1rem 3rem;
    @media (max-width: 768px){
        padding: 1rem 2rem;
    }

    @media (max-width: 576px){
        padding: 0px;
    }
`;

export const LogoContainerStyled = styled.div`
    height: 50px;
    a{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 8px 20px;
    }
    img{
        max-width: 100%;
        max-height: 100%;
    }
    p{
        color: white;
        font-size: 1.5rem;

        font-family: "Didact Gothic", sans-serif;
        font-weight: 800;
    }


    @media (max-width: 576px){        
        p{
            font-size: 1rem;
        }
       
    }
`;

export const LinksContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 10px;
    padding: 0px 10px;
    a{
        font-size: 1.2rem;
        color: white;
        padding: 1rem 1.5rem;
    }

    @media (max-width: 576px){
        /*background: lightcoral;*/
        padding: 0.7;
    }
`;

export const LinkContainerStyled = styled.div`
    font-size: 0.7rem;
    color: ${(props) => (props.home ? "#ff9d01" : "#ff9300")};
    display: flex;
    align-items: center;
    border: 1px solid black;
    font-family: "Didact Gothic", sans-serif;
    font-weight: 500;
    cursor: pointer;
    border-radius: 10px;
    a{  
        padding: 8px 35px;
    }

    @media (max-width: 768px){
        padding: 1rem 2rem;
    }


    @media (max-width: 576px){
        font-size: 12px;
        padding: 0px;
        /*border: 1px solid blue;*/
        
        a{
            /*color: yellow;*/
            font-size: 0.8rem;
        }
       
    }
`;

export const UserContainerStyled = styled(LinkContainerStyled)` `;

export const HomeContainerStyled = styled(LinkContainerStyled)`
    @media (max-width: 768px){
        display: none;
    }
`