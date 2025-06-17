import styled from "styled-components";

export  const AspectContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    gap: 40px;

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        
        p{
            font-weight: bold;
            font-size: 1rem;
        }

        svg{
            /*color: white;*/
        }
    }
`;