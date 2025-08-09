
import styled from "styled-components";

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
    margin: 30px;

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
    //background: #8daed2;
    border-radius: 10px;
    //border: 2px solid black;

    /*
    h2{
        font-family: "Bruno Ace SC", sans-serif;
        font-family: "Tagesschrift", system-ui;
        color: white;
        font-style: normal;
    }
    */

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
    max-width: 200px;
    font-size: 1.2rem;
    padding: 10px;
    border-radius: 10px;
    background: #d98321;
    color: white;
    cursor: pointer;
    border: none;
`;

/*
export const RegisterWrapper = styled.div`
    background: #c59382;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    max-width: 500px;
    padding: 20px;
    min-height: 60vh;

    h2{
        font-size: 2rem;
    }
`;

export const HeaderStyled = styled.div`
    display: flex;
    width: 100%;
    padding: 20px;
    justify-content: center;
    align-items: center;
    gap: 30px;
    background: #c04666;
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
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 80%;

    input{
        width: 100%;
        padding: 10px;
        border-radius: 10px;
        border: 1px solid black;
        font-size: 1rem;
    }

    button{
        width: 100%;
        font-size: 1.2rem;
        padding: 10px;
        border-radius: 10px;
        background: #d98321;
        color: white;
    }

    p{
        font-size: 1.2rem;
        font-family: "Tagesschrift", system-ui;
        color: white;
        width: 100%;
        text-align: center;
    }
`;

export const LoginWrapper = styled(FormStyled)`
    button{
        background: #32c0d3;
    }
`;

*/