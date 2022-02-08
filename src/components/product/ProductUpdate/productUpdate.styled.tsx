import styled from 'styled-components';
import { Form } from 'formik';

export const Container = styled.div`
  flex: 4;
  padding: 20px;
  -webkit-box-shadowl: var(--shadow-5);
  box-shadow: var(--box-shadow);
  margin-right: 10px;
`;

export const ProductTitle = styled.span`
  font-size: 24px;
  font-weight: 600;
`;

export const ProductForm = styled(Form)`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const ProductFormLeft = styled.div`
  flex: 2;
  -webkit-box-shadowl: var(--shadow-5);
  box-shadow: var(--box-shadow);
  margin-right: 10px;
`;

export const ProductFormRight = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  -webkit-box-shadowl: var(--shadow-5);
  box-shadow: var(--box-shadow);
  margin-right: 10px;
`;
