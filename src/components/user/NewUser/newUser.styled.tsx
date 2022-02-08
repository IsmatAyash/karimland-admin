import styled from 'styled-components';

export const NewUserCtr = styled.div`
  flex: 4;
`;

export const NewUserTitle = styled.h1``;
export const NewUserForm = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
export const NewUserItem = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-right: 20px;

  > label {
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 600;
    color: var(--grey-600);
  }

  > input {
    height: 15px;
    padding: 10px;
    border: 1px solid var(--grey-500);
    border-radius: 5px;
  }
`;

export const NewUserGender = styled.div`
  > label {
    margin: 10px;
    font-size: 18px;
    color: var(--grey-900);
  }

  > input {
    margin-top: 5px;
  }
`;
export const NewUserSelect = styled.select`
  height: 30px;
  border-radius: 5px;
`;

export const NewUserBtn = styled.button`
  margin-top: 30px;
  background-color: var(--primary-500);
  border-radius: 5px;
  width: 200px;
  color: var(--white);
  padding: 7px 10px;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;
