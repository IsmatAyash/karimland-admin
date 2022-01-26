import {
  LocationCity,
  LocationSearching,
  MailOutline,
  PhoneAndroid,
  Publish,
} from '@mui/icons-material';
import {
  LeftCtr,
  UserCtr,
  UserShow,
  UserShowBottom,
  UserShowName,
  UserShowTop,
  UserShowTopTitle,
  UserTitle,
  UserTitleCtr,
  UserUpdate,
  UserNameSub,
  UserAvatar,
  UserShowInfo,
  UserShowTitle,
  UserUpdateTitle,
  UserUpdateForm,
  UserUpdateFormLeft,
  UserUpdateFormRight,
  UserUpdateFormItem,
  UserUpdateUpload,
  UserUpdateAvatar,
  UserUpdateBtn,
} from '../User/user.styled';

const iconSize = { fontSize: '20px' };

const User = () => {
  return (
    <UserCtr>
      <UserTitleCtr>
        <UserTitle>Edit User</UserTitle>
      </UserTitleCtr>
      <LeftCtr>
        <UserShow>
          <UserShowTop>
            <UserAvatar
              src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="User Avatar"
            />
            <UserShowTopTitle>
              <UserShowName>Ismat Ayash</UserShowName>
              <UserNameSub>Seller</UserNameSub>
            </UserShowTopTitle>
          </UserShowTop>
          <UserShowBottom>
            <UserShowTitle>Contact Details</UserShowTitle>
            <UserShowInfo>
              <MailOutline style={iconSize} />
              <UserShowName>ismat.ayash@gmail.com</UserShowName>
            </UserShowInfo>
            <UserShowInfo>
              <PhoneAndroid style={iconSize} />
              <UserShowName>987-23450</UserShowName>
            </UserShowInfo>
            <UserShowInfo>
              <LocationSearching style={iconSize} />
              <UserShowName>Al-Sultan zip code 111222 main street</UserShowName>
            </UserShowInfo>
            <UserShowInfo>
              <LocationCity style={iconSize} />
              <UserShowName>Kuwait</UserShowName>
            </UserShowInfo>
          </UserShowBottom>
        </UserShow>
        <UserUpdate>
          <UserUpdateTitle>Edit</UserUpdateTitle>
          <UserUpdateForm>
            <UserUpdateFormLeft>
              <UserUpdateFormItem>
                <label>User Name</label>
                <input type="text" placeholder="User name" />
              </UserUpdateFormItem>
              <UserUpdateFormItem>
                <label>Phone</label>
                <input type="text" placeholder="User phone" />
              </UserUpdateFormItem>
              <UserUpdateFormItem>
                <label>Shipping Address</label>
                <input type="text" placeholder="Shipping address" />
              </UserUpdateFormItem>
              <UserUpdateFormItem>
                <label>Country</label>
                <input type="text" placeholder="Country" />
              </UserUpdateFormItem>
              <UserUpdateFormItem>
                <label>Status</label>
                <input type="text" placeholder="Status" />
              </UserUpdateFormItem>
            </UserUpdateFormLeft>
            <UserUpdateFormRight>
              <UserUpdateUpload>
                <UserUpdateAvatar
                  src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt="User update avatar"
                />
                <label htmlFor="file">
                  <Publish style={{ cursor: 'pointer' }} />
                </label>
                <input type="file" id="file" style={{ display: 'none' }} />
              </UserUpdateUpload>
              <UserUpdateBtn>Update</UserUpdateBtn>
            </UserUpdateFormRight>
          </UserUpdateForm>
        </UserUpdate>
      </LeftCtr>
    </UserCtr>
  );
};

export default User;
