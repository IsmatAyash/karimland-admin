import * as Yup from 'yup';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const UserUpdateSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
    .label('Full name'),
  shippingAddress: Yup.string().required('Required').label('Shipping address'),
  phone: Yup.string().matches(phoneRegExp, 'Phone number is invalid'),
  userType: Yup.string()
    .required('Required')
    .matches(/(Seller|Buyer)/, {
      excludeEmptyString: true,
    }),
});
