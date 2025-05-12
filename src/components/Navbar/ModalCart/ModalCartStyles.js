import styled, { css } from "styled-components";


export const ModalOverLayStyled = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
    width: calc(100vw - 450px);
    height: 100vh;

    background:rgba(160, 159, 163, 0.47);

    ${({ isHidden }) =>
        !isHidden &&
        css`
            backdrop-filter: blur(4px);
    `}
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
    gap: 30px;
    width: 450px;
    /* height: calc(100vh - 4rem); */
    height: 100vh;
    padding: 2rem;
    background: gray;
    border-radius: 1rem 0 0  1rem;
    box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.3);
`

export const CloseButtonContainerStyled = styled.div`    
    background: lightpink;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    outline: none;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    color: white;
`;

export const CloseButtonStyled = styled.button`
    width: 50px;
    height: 50px;
    background: cyan;
    cursor: pointer;
`;


export const MainContainerStyled = styled.div`

    background: lightblue;
    width: 300px;
    height: 500px;
`

export const TitleStyled = styled.div`
    background: orange;
    width: 100%;
    height: 50px;
`

export const Increase = styled.div`

    background: lightgreen;

`

