import styled from 'styled-components';
import { Formik as FormikContainer, Form as FormikForm } from 'formik';

export const CheckoutDatosStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
`;

export const Formik = styled(FormikContainer)`
  display: flex;
  flex-wrap: wrap;
`;

export const Form = styled(FormikForm)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 20px;
  flex-wrap: wrap;

  div{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;