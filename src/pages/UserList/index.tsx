import { DataGrid } from '@mui/x-data-grid';
import {
  UserListCtr,
  UserCtr,
  UserAvatar,
  UserEditBtn,
  UserDeleteBtn,
} from './userlist.styled';
import { userRows } from '../../data';

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
          <UserEditBtn>Edit</UserEditBtn>
          <UserDeleteBtn />
        </>
      );
    },
  },
];

const UserList = () => {
  return (
    <UserListCtr>
      <DataGrid
        rows={userRows}
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
