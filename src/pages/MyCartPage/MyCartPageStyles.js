import { NavLink } from "react-router-dom";
import styled from "styled-components"
import { motion } from "framer-motion";

export const MycartPageWrapper = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  max-width: 1400px;
  min-height: 60vh;
  padding: 20px;

  h2, h3, p, span{
    color: #fff;
    font-weight: 600;
    font-family: monstserrat, sans-serif;
  }
`;

export const CartContainerStyled = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;

  @media(max-width: 576px){
    flex-direction: column;  
  }
`;

export const CartItemsContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

export const CartItemContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  
  gap: 10px;
  width: 100%;
  border-bottom: 1px solid #eee;

  padding-bottom: 15px;

  

  @media (max-width: 1000px){
    padding-bottom: 10px;
  }

  @media (max-width: 576px){
    //flex-direction: column;
    //flex-wrap: wrap;
    padding-bottom: 5px;
  }

`;

export const PriceContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(9, 93, 104, 1);
  padding: 5px;
  min-width: 100px;
`;

export const ItemDetailsContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 400px;

  img{
    width: 70px;
    height: 70px;
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
  align-items: center;
  gap: 10px;

  @media (max-width: 1000px){
    gap: 10px;
    flex-direction: column;
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
`

export const ItemPrice = styled.span`
  color: #888;
`

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
  min-width: 200px;
  max-width: 250px;
  height: fit-content;

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
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;

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