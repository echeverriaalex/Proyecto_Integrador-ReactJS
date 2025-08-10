import styled from "styled-components";

export const LoginWrapper = styled.div`
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const FormBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 500px;
    gap: 10px;
    min-height: 600px;
    background-color: #575757ff;
    border-radius: 10px;
    border: 1px solid #000;
    padding: 15px;
`;

export const HeaderStyled = styled.div`
    display: flex;
    width: 100%;
    padding: 20px;
    justify-content: center;
    align-items: center;
    gap: 30px;
    border-radius: 10px;

    img{
        height: 150px;
    }
`;

export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding: 10px 0px;
    width: 100%;
`;

export const RegisterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding: 10px 0px;
    width: 100%;

    p{
        font-size: 1.2rem;
        color: white;
    }
`;

export const ButtonStyled = styled.button`
    width: 100%;
    max-width: 200px;
    font-size: 1.2rem;
    padding: 10px;
    border-radius: 10px;
    background: #d98321;
    color: white;
    cursor: pointer;
    border: none;
`;