import styled from 'styled-components';

export const UserCtr = styled.div`
  flex: 4;
  padding: 20px;
`;

export const UserTitleCtr = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserTitle = styled.h1``;

export const LeftCtr = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const UserShow = styled.div`
  flex: 1;
  padding: 20px;
  -webkit-box-shadowl: var(--shadow-5);
  box-shadow: var(--box-shadow);
`;

export const UserShowTop = styled.div`
  display: flex;
  align-items: center;
`;
export const UserShowTopTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
export const UserShowName = styled.span`
  font-weight: 600;
`;
export const UserNameSub = styled.span`
  font-weight: 300;
`;
export const UserShowBottom = styled.div`
  margin-top: 20px;
`;
export const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const UserShowInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin: 20px 0;
  color: var(--primary-700);
`;

export const UserShowTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: var(--grey-600);
`;

export const UserUpdate = styled.div`
  flex: 2;
  padding: 20px;
  -webkit-box-shadowl: var(--shadow-5);
  box-shadow: var(--box-shadow);
  margin-left: 20px;
`;

export const UserUpdateTitle = styled.span`
  font-size: 24px;
  font-weight: 600;
`;

export const UserUpdateForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const UserUpdateFormLeft = styled.div``;
export const UserUpdateFormRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const UserUpdateFormItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  > label {
    margin-bottom: 5px;
    font-size: 14px;
  }

  > input {
    border: none;
    width: 250px;
    height: 30px;
    border-bottom: 1px solid var(--grey-500);
  }
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

export const UserUpdateBtn = styled.button`
  border-radius: 5px;
  border: none;
  padding: 5px;
  cursor: pointer;
  background-color: var(--primary-500);
  color: var(--white);
  font-weight: 600;
`;
