import styled from 'styled-components';

export const UserCtr = styled.div`
  flex: 4;
  padding: 3px;
  width: 100%;
  margin-top: 10px;
  display: flex;
  gap: 20px;
`;

export const UserTitleCtr = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
