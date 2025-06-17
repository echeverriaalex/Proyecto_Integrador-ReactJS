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
            heigh: 60px;
            font-size: 30px;
        }
    }

    @media(max-width: 576px){
    
        div{
            gap: 6px;

            svg{
                font-size: 20px;
            }
        }
    }
`;