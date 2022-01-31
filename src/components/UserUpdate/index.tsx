import {
  UserUpdateCtr,
  UserUpdateTitle,
  UserUpdateForm,
  UserUpdateFormLeft,
  UserUpdateFormRight,
  UserUpdateFormItem,
  UserUpdateUpload,
  UserUpdateAvatar,
  UserUpdateBtn,
} from './userUpdate.styled';
import { userDataType } from '../../utils/dataTypes';
import { Publish } from '@mui/icons-material';
import FormInput from '../common/FormInput';

const UserUpdate = ({
  name,
  userType,
  avatar,
  country,
  status,
  shippingAddress,
  phone,
}: userDataType) => {
  const cols = [
    { key: 1, label: 'User Name', value: `${name}` },
    { key: 1, label: 'User Type', value: `${userType}` },
    { key: 1, label: 'Phone', value: `${phone}` },
    { key: 1, label: 'Shipping Address', value: `${shippingAddress}` },
    { key: 1, label: 'Country', value: `${country}` },
    { key: 1, label: 'Status', value: `${status}` },
  ];

  return (
    <UserUpdateCtr>
      <UserUpdateTitle>Edit</UserUpdateTitle>
      <UserUpdateForm>
        <UserUpdateFormLeft>
          {cols.map((col) => (
            <UserUpdateFormItem key={col.key}>
              <FormInput label={col.label} value={col.value} />
            </UserUpdateFormItem>
          ))}
        </UserUpdateFormLeft>
        <UserUpdateFormRight>
          <UserUpdateUpload>
            <UserUpdateAvatar src={avatar} alt="User update avatar" />
            <label htmlFor="file">
              <Publish style={{ cursor: 'pointer' }} />
            </label>
            <input type="file" id="file" style={{ display: 'none' }} />
          </UserUpdateUpload>
          <UserUpdateBtn>Update</UserUpdateBtn>
        </UserUpdateFormRight>
      </UserUpdateForm>
    </UserUpdateCtr>
  );
};

export default UserUpdate;
