import styled from "styled-components";

export const LoaderWrapper = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  background-color: rgba(24, 24, 24, 0.8);

  img {
    width: 100px;
  }

  h2 {
    color: #fff;
    font-family: "Montserrat", sans-serif;
  }
`;