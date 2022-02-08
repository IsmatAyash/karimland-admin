import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { UserCtr } from '../User/user.styled';
import { userDataType } from '../../types';
import UserDetails from '../../components/user/UserDetails';
import { getUserDataById } from '../../data';
import NewUser from '../../components/user/NewUser';
import UserUpdate from '../../components/user/UserUpdate';

const User = () => {
  const [userData, setUserData] = useState<userDataType | null>(null);
  const { userId } = useParams();

  useEffect(() => {
    if (userId) setUserData(getUserDataById(userId));
  }, [userId]);

  return (
    <UserCtr>
      {userData ? (
        <>
          <UserDetails {...userData} />
          <UserUpdate {...userData} />
        </>
      ) : (
        <NewUser />
      )}
    </UserCtr>
  );
};

export default User;
