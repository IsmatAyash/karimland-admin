import type { userDataType } from '../../../types';

export const getUserCols = ({
  fullName,
  status,
  country,
  shippingAddress,
  userType,
  phone,
}: userDataType) => [
  {
    key: 1,
    label: 'User Name',
    name: 'fullName' as keyof userDataType,
    value: `${fullName}`,
  },
  {
    key: 2,
    label: 'User Type',
    name: 'userType' as keyof userDataType,
    value: `${userType}`,
  },
  {
    key: 3,
    label: 'Phone',
    name: 'phone' as keyof userDataType,
    value: `${phone}`,
  },
  {
    key: 4,
    label: 'Shipping Address',
    name: 'shippingAddress' as keyof userDataType,
    value: `${shippingAddress}`,
  },
  {
    key: 5,
    label: 'Country',
    name: 'country' as keyof userDataType,
    value: `${country}`,
  },
  {
    key: 6,
    label: 'Status',
    name: 'status' as keyof userDataType,
    value: `${status}`,
  },
];
