import styled from "styled-components";
import { themePage } from "../../components/styles/GlobalStyles";

export const LoaderWrapper = styled.div`
  margin-top: ${ themePage.dimensions.marginTop };
  width: ${ themePage.dimensions.width };
  min-height: ${ themePage.dimensions.minHeight };
  max-width: ${ themePage.dimensions.maxWidth }; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000;
  z-index: 999;

  @media (max-width: 576px) {
    margin-top: ${ themePage.dimensions.marginTopMobile };
  }
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
