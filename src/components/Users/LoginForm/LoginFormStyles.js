import styled from "styled-components";

export const FormBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
    min-height: 500px;
    background-color: #074d13ff;

    /*
    padding: 10px;
    */
`;

export const HeaderStyled = styled.div`
    display: flex;
    width: 100%;
    padding: 20px;
    justify-content: center;
    align-items: center;
    gap: 30px;
    background: #8daed2;
    border-radius: 10px;
    border: 2px solid black;

    h2{
        font-family: "Bruno Ace SC", sans-serif;
        font-family: "Tagesschrift", system-ui;
        color: white;
        font-style: normal;
    }

    img{
        height: 100px;
    }
`;

export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding: 10px 0px;
    width: 100%;
    /*
    height: 300px;
    background-color: #d66b13ff;
    */
`;

export const RegisterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 10px 0px;
    width: 100%;

    p{
        font-size: 1.2rem;
        color: white;
    }
`;

export const ButtonStyled = styled.button`

    width: 100%;
    font-size: 1.2rem;
    padding: 10px;
    border-radius: 10px;
    background: #d98321;
    color: white;
`;