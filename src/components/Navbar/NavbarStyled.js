import styled from "styled-components";

export const HeaderStyled = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    height: 70px;    
    background: #ac12c0;
    /*background: transparent;*/
    border-bottom: 1px solid white;

    @media (max-width: 768px){
        padding: 1rem 2rem;
    }    
`;

export const NavbarContainerStyled = styled.nav`
    width: 100%;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;    
    padding: 1rem 4rem;
    background: #12a6c0;

    @media (max-width: 768px){
        padding: 1rem 2rem;
    }

    
`;

export const LogoContainerStyled = styled.div`
    height: 70px;
    img{
        max-width: 100%;
        max-height: 100%;
    }
`;

export const LinksContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 40px;
    background: red;
    padding: 0px 40px;

    a{
        font-size: 1.2rem;
        color: white;
        padding: 1rem 1.5rem;
    }
`;

export const LinkContainerStyled = styled.div`
    font-weight: 1.2rem;
    color: ${(props) => (props.home ? "#ff9d01" : "#ff9300")};
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const UserContainerStyled = styled(LinkContainerStyled)` `;

export const HomeContainerStyled = styled(LinkContainerStyled)`
    @media (max-width: 768px){
        display: none;
    }
`