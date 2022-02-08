import styled from 'styled-components';
import { Form } from 'formik';

export const UserUpdateCtr = styled.div`
  flex: 2;
  padding: 20px;
  -webkit-box-shadowl: var(--shadow-5);
  box-shadow: var(--box-shadow);
  margin-right: 10px;
`;

export const UserUpdateTitle = styled.span`
  font-size: 24px;
  font-weight: 600;
`;

export const UserUpdateForm = styled(Form)`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const UserUpdateFormRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const UserUpdateUpload = styled.div`
  display: flex;
  align-items: center;
`;

export const UserUpdateAvatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 20px;
`;
