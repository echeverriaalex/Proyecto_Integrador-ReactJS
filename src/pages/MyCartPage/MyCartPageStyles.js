import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { themePage } from "../../components/styles/GlobalStyles";

export const MycartPageWrapper = styled.div`
  margin-top: ${ themePage.dimensions.marginTop };
  width: ${ themePage.dimensions.width };
  min-height: ${ themePage.dimensions.minHeight };
  max-width: ${ themePage.dimensions.maxWidth };
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 10px;

  h2, h3, p, span{
    color: #fff;
    font-weight: 600;
    font-family: monstserrat, sans-serif;
  }

  @media (max-width: 576px) {
    margin-top: ${ themePage.dimensions.marginTopMobile };
  }
`;

export const CartProcessContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;

  @media (max-width: 576px){
    flex-direction: column-reverse;
    padding: 10px;
    gap: 50px;
  }
`;

export const CartContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 50%;
  max-height: 80vh;
  overflow-x: auto;

  @media(max-width: 576px){
    width: 100%;
  }
`;

export const CartItemsContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: 100%;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #000;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

export const CartItemContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  border-bottom: 1px solid #eee;
  padding: 10px;
`;

export const PriceContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 5px;

  p{
    font-size: 1.2rem;
  }
`;

export const ItemDetailsContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 120px;

  img{
    width: 100%;
    height: 100%;
    padding: 5px;
  }

  @media (max-width: 1000px){
    gap: 10px;
    flex-direction: column;
  }

  @media (max-width: 576px){
    flex-direction: column;  
  }

`;

export const IdentityContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  @media (max-width: 1000px){
    gap: 10px;
    flex-direction: column;
  }
`;

export const ImageContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  gap: 10px;

  img{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const TextContainerStyled = styled.div`  
  h3{
    font-size: 1rem;
  }
`;

export const PriceQuantityContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  @media (max-width: 1000px){
    flex-direction: column;
  }
`;

export const ItemName = styled.span`
  font-weight: bold;
`;

export const ItemPrice = styled.span`
  color: #888;
`;

export const TotalPrice = styled.div`
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
`;

export const TotalContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  border: 2px solid #c9c9c9ff;
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  
  height: fit-content;
  
  //min-width: 200px;
  //max-width: 250px;
  

  @media (max-width: 1000px){
    padding: 20px 10px;
  }

  @media (max-width: 576px){
    max-width: unset;
  }
`;

export const DescriptionTotalContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  width: 100%;
  border-radius: 10px;
`;

export const ButtonContainerStyled = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  //flex-direction: column;
  gap: 20px;

  button{
    display: flex;
    justify-content: center;
    gap: 5px;
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    color: white;
    font-size: 1rem;
  }

  @media (max-width: 576px){
    flex-direction: column;
    gap: 10px

    button{
      width: 100%;
      padding: 10px;
      border-radius: 10px;
      font-weight: 400;
    }
  }
`;

export const EmptyCartContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100%;
  padding: 20px;
`;

export const NavLinksContainerStyled = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const NavLinkContainerStyled = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  font-family: monstserrat, sans-serif;
  background: #000;
  padding: 15px 30px;
  border-radius: 8px;

  @media (max-width: 576px) {
    padding: 15px 20px;
  }
`;