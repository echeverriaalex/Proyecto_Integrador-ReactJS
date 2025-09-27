import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const ModalContainerStyled = styled(motion.div)`
  position: absolute;
  background-color: #000;
  //box-shadow: 0 0 50px 20px #550b0bff;
  width: 90%;
  max-width: 450px;
  top: 100px;
  right: 0;
  z-index: 98;
  border-radius: 1rem 0 0 1rem;
  padding: 2rem;
  
  & span {
    display: flex;
    margin-top: 10px;
    cursor: pointer;

    &:hover {
      opacity: 90%;
    }
  }

  h2, a{
    color: #fff;
    font-family: Monsterrat, sans-serif;
  }
`;

export const LinksContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LinkStyled = styled(Link)`
  &:hover {
    opacity: 90%;
  }
`;

export const UsernameStyled = styled.h2`
  font-weight: 400;
`;

export const HrStyled = styled.hr`
  margin: 2rem 0;
`;

export const SpanStyled = styled.span`
  color: #fff;
  font-family: Monsterrat, sans-serif;
  font-weight: 700;
  border: 3px solid #c50303ff;
  padding: 10px;
  border-radius: 5px;
`;