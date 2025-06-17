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
    gap: 10px;

    p{
        /*background:rgb(15, 233, 26);*/
        width: 40px;
    }
`;

export  const LineStatisticStyled = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    background:rgb(120, 24, 230);
    height: 15px;
    border-radius: 10px;
`;