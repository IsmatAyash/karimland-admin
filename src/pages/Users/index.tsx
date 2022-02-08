import { DataGrid } from '@mui/x-data-grid';
import {
  UserListCtr,
  UserCtr,
  UserAvatar,
  UserEditBtn,
  UserDeleteBtn,
  UserAddBtn,
  UserAddBtnText,
} from './users.styled';
import { userRows } from '../../data';
import { Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Add } from '@mui/icons-material';
import { userDataType } from '../../types';

const Users = () => {
  const [userData, setUserData] = useState<userDataType[]>(userRows);

  useEffect(() => setUserData(userRows), []);
  const handleDelete = (id: string) => {
    setUserData(userData.filter((d) => d.id !== id));
  };

  type avatarProp = { avatar: string; fullName: string };
  const renderAvatar = ({ avatar, fullName }: avatarProp) => {
    return (
      <UserCtr>
        <UserAvatar src={avatar} alt={fullName} />
        {fullName}
      </UserCtr>
    );
  };

  type actionsProp = { id: string };
  const renderActions = ({ id }: actionsProp) => {
    return (
      <>
        <Link to={`${id}`}>
          <UserEditBtn>Edit User</UserEditBtn>
        </Link>
        <UserDeleteBtn onClick={() => handleDelete(id)} />
      </>
    );
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'fullName',
      headerName: 'User',
      width: 150,
      renderCell: (params: any) => renderAvatar(params.row),
    },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'country', headerName: 'Country', width: 120 },
    { field: 'status', headerName: 'Status', width: 100 },
    { field: 'userType', headerName: 'User Type', width: 100 },
    {
      field: 'actions',
      headerName: 'Action',
      width: 150,
      sortable: false,
      renderCell: (params: any) => renderActions(params.row),
    },
  ];

  return (
    <UserListCtr>
      <Link to="newUser" style={{ textDecoration: 'none' }}>
        <UserAddBtn>
          <Add />
          <UserAddBtnText>New User</UserAddBtnText>
        </UserAddBtn>
      </Link>
      <DataGrid
        style={{ width: '99%' }}
        rows={userData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
      <Outlet context={{ userData, setUserData }} />
      {/* <Outlet context={userRow} /> */}
    </UserListCtr>
  );
};

export default Users;
