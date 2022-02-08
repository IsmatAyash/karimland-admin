import styled from 'styled-components';
import { DeleteOutline } from '@mui/icons-material';

export const ProductsCtr = styled.div`
  flex: 4;
  height: 370px;
  width: 99%;
`;

export const ProductCtr = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

export const ProductEditBtn = styled.button`
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  background-color: var(--green-light);
  color: var(--white);
  cursor: pointer;
  margin-right: 10px;
`;

export const ProductDeleteBtn = styled(DeleteOutline)`
  color: #f01616;
  cursor: pointer;
`;

export const ProductAddBtn = styled.button`
  display: flex;
  gap: 5px;
  width: 130px;
  border: 2px solid var(--green-light);
  padding: 5px;
  /* background-color: var(--primary-500); */
  border-radius: 5px;
  cursor: pointer;
  color: var(--grey-900);
  margin-bottom: 20px;
  align-items: center;
`;

export const ProductAddBtnText = styled.span`
  font-weight: bold;
`;
