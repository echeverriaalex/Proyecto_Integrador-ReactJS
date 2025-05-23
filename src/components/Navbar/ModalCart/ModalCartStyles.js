import styled, { css } from "styled-components";


export const ModalOverLayStyled = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
    width: calc(100vw - 450px);
    height: 100vh;

    background:rgba(143, 143, 143, 0.47);

    ${({ isHidden }) =>
        !isHidden &&
        css`
            backdrop-filter: blur(4px);
    `}


    @media (max-width: 576px) {
        /*
        width: 100vw;
        height: 100vh;
        */
        background: pink;

        height: 100%;
    }
`;

export const ModalCartContainer = styled.div`

`


export const ContainerStyled = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    z-index: 99;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 8px;
    width: 450px;
    /* height: calc(100vh - 4rem); */
    height: 100vh;
    padding: 15px;
    background: #f1f2f3;
    border-radius: 1rem 0 0  1rem;
    box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.3);

    @media (max-width: 576px){
        width: 88vw;
        height: 100vh;
        
        
        
    }
`

export const CloseButtonContainerStyled = styled.div`    
    /*background: lightpink;*/

    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 2rem;
    /*height: 2rem;*/
    outline: none;
    border: none;
    /*border-radius: 10px;*/
    width: 100%;
    /*cursor: pointer;*/
    color: white;
`;

export const CloseButtonStyled = styled.button`
    /*width: 50px;*/
    height: 50px;
    /*background: cyan;*/
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 10px;
    display: flex;
    gap: 10px;
    align-items: center;
    background: transparent;
`;


export const MainContainerStyled = styled.div`

    background: lightblue;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const TitleStyled = styled.div`
    background: orange;
    width: 100%;
    height: 50px;
    text-align: center;
`

export const Increase = styled.div`

    background: lightgreen;

`

