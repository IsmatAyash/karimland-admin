import {
  UserShow,
  UserShowBottom,
  UserShowName,
  UserShowTop,
  UserShowTopTitle,
  UserNameSub,
  UserAvatar,
  UserShowInfo,
  UserShowTitle,
} from './userDetails.styled';
import {
  LocationCity,
  LocationSearching,
  MailOutline,
  PhoneAndroid,
} from '@mui/icons-material';
import { userDataType } from '../../utils/dataTypes';

const UserDetails = ({
  name,
  email,
  userType,
  avatar,
  country,
  status,
  shippingAddress,
  phone,
}: userDataType) => {
  const iconSize = { fontSize: '20px' };

  return (
    <UserShow>
      <UserShowTop>
        <UserAvatar src={avatar} alt={`${name}-avatar`} />
        <UserShowTopTitle>
          <UserShowName>{name}</UserShowName>
          <UserNameSub>{userType}</UserNameSub>
        </UserShowTopTitle>
      </UserShowTop>
      <UserShowBottom>
        <UserShowTitle>Contact Details</UserShowTitle>
        <UserShowInfo>
          <MailOutline style={iconSize} />
          <UserShowName>{email}</UserShowName>
        </UserShowInfo>
        <UserShowInfo>
          <PhoneAndroid style={iconSize} />
          <UserShowName>{phone}</UserShowName>
        </UserShowInfo>
        <UserShowInfo>
          <LocationSearching style={iconSize} />
          <UserShowName>{shippingAddress}</UserShowName>
        </UserShowInfo>
        <UserShowInfo>
          <LocationCity style={iconSize} />
          <UserShowName>{country}</UserShowName>
        </UserShowInfo>
        <UserShowInfo>
          <LocationCity style={iconSize} />
          <UserShowName>{status}</UserShowName>
        </UserShowInfo>
      </UserShowBottom>
    </UserShow>
  );
};

export default UserDetails;
