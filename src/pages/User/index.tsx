import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { UserCtr } from '../User/user.styled';
import { userDataType } from '../../utils/dataTypes';
import UserDetails from '../../components/UserDetails';
import UserUpdate from '../../components/UserUpdate';
import { getUserDataById } from '../../data';

const User = () => {
  const [userData, setUserData] = useState<userDataType | null>(null);
  const { userId } = useParams();

  useEffect(() => {
    if (userId) setUserData(getUserDataById(userId));
  }, [userId]);

  if (!userData) return <h1>Loading...</h1>;

  return (
    <UserCtr>
      <UserDetails {...userData} />
      <UserUpdate {...userData} />
    </UserCtr>
  );
};

export default User;
