import styled from "styled-components";

export  const ContainerDataStatisticStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
    padding: 8px;

    @media(max-width: 576px){
        gap: 5px;
        padding: 5px;
    }
`;

export  const BaseStatsContainerStyled = styled.div`
    display: flex;
    align-items: center;
`;

export  const DataTextContainerStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;

    h4{
        font-size: 1rem;
        width: 50px;
        font-size: 1rem;
        font-family: monospace, 'Arial', sans-serif;
    }

    p{
        text-align: right;
        width: 50px;
    }
`;

export  const LineStatisticStyled = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    background:rgb(0, 0, 0);
    height: 15px;
    border-radius: 10px;
`;

export  const LevelStatisticStyled = styled.div`
    width: ${({ width }) => (width) };
    background: rgb(121, 121, 121);
    /*
    background: ${({ background }) => (background) };
    */
    height: 15px;
    border-radius: 5px;
`;