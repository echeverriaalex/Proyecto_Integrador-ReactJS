import styled from "styled-components";

export const LoaderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: rgba(24, 24, 24, 0.8);
  min-height: 70vh;
`;

export const ImageContainerStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  img {
    width: 100px;
  }
`;

export const TextContainerStyled = styled.div`

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 8px;

  h2, p {
    color: #fff;
    font-family: "Montserrat", sans-serif;
    text-align: center;
  }

  p{
    font-size: 1.2rem;
    font-weight: 600;
  }
`;
