import { DataGrid } from '@mui/x-data-grid';
import {
  UserListCtr,
  UserCtr,
  UserAvatar,
  UserEditBtn,
  UserDeleteBtn,
  UserAddBtn,
} from './userlist.styled';
import { userRows } from '../../data';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const UserList = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id: number) => {
    setData(data.filter((d) => d.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'name',
      headerName: 'User',
      width: 150,
      renderCell: (params: any) => {
        return (
          <UserCtr>
            <UserAvatar src={params.row.avatar} alt={params.row.name} />
            {params.row.name}
          </UserCtr>
        );
      },
    },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'country',
      headerName: 'Country',
      width: 120,
    },
    {
      field: 'status',
      headerName: 'Status',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 100,
    },
    {
      field: 'sales',
      headerName: 'Sales',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 100,
    },
    {
      field: 'avatar',
      headerName: 'Status',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 100,
    },
    {
      field: 'userType',
      headerName: 'User Type',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 100,
    },
    {
      field: 'actions',
      headerName: 'Action',
      width: 150,
      renderCell: (params: any) => {
        return (
          <>
            <Link to={`/user/${params.row.id}`}>
              <UserEditBtn>Edit</UserEditBtn>
            </Link>
            <UserDeleteBtn onClick={() => handleDelete(params.row.id)} />
          </>
        );
      },
    },
  ];

  return (
    <UserListCtr>
      <Link to="/newUser">
        <UserAddBtn>Create</UserAddBtn>
      </Link>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
        disableSelectionOnClick
      />
    </UserListCtr>
  );
};

export default UserList;
