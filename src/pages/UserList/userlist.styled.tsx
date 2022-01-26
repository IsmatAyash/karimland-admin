import styled from 'styled-components';
import { DeleteOutline } from '@mui/icons-material';

export const UserListCtr = styled.div`
  flex: 4;
`;

export const UserCtr = styled.div`
  display: flex;
  align-items: center;
`;

export const UserAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

export const UserEditBtn = styled.button`
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  background-color: var(--green-light);
  color: var(--white);
  cursor: pointer;
  margin-right: 10px;
`;

export const UserDeleteBtn = styled(DeleteOutline)`
  color: #f01616;
  cursor: pointer;
`;

export const UserAddBtn = styled.button`
  width: 80px;
  border: none;
  padding: 5px;
  background-color: var(--primary-500);
  border-radius: 5px;
  cursor: pointer;
  color: var(--white);
  margin-bottom: 20px;
`;
