import styled from "styled-components";

export const RegisterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
    background: #c59382;

    @media (max-width: 576px) {
        background: brown;
        width: 100%;
    }
`;

export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    max-width: 100%;
    width: 600px;
    padding: 20px;

    input{
        padding: 10px;
        border-radius: 5px;
        border: none;
        outline: none;
        width: 60%;
        font-size: 1rem;
    }

    @media (max-width: 576px) {
        background: cyan;
        width: 100%;
        input{
            width: 100%;
            
        }
    }
`;

export const LoginContainer = styled.button`
    background: white;
    padding: 10px;
    font-size: 1rem;
`;