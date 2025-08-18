import styled from "styled-components";

export  const ContainerDataStatisticStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 5px;
`;

export  const BaseStatsContainerStyled = styled.div`
    display: flex;
    align-items: center;
`;

export  const DataTextContainerStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    justify-content: space-between;

    h4, p{
        display: flex;
        align-items: center;
        font-size: 1rem;
        font-family: monospace, 'Arial', sans-serif;
    }

    h4{
        justify-content: flex-start;        
        min-width: 35px;
    }

    p{
        justify-content: flex-end;
    }
`;

export  const LineStatisticStyled = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    background: #000;
    height: 15px;
    border-radius: 10px;
`;

export  const LevelStatisticStyled = styled.div`
    width: ${({ width }) => (width) };
    background: #868585ff;
    height: 100%;
    border-radius: 5px;
`;