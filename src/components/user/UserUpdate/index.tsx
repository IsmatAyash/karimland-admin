import Form from '../../common/Form';
import { getUserCols } from './columns';
import { UserUpdateSchema } from './validationSchema';
import type { userDataType } from '../../../types';
import {
  UserUpdateCtr,
  UserUpdateTitle,
  UserUpdateForm,
  UserUpdateFormRight,
} from './userUpdate.styled';
import FomrField from '../../common/FomrField';
import SubmitButton from '../../common/SubmitButton';
import FormFileUpload from '../../common/FormFileUpload';

const UserUpdate = (dataToUpdate: userDataType) => {
  const cols = getUserCols(dataToUpdate);

  return (
    <UserUpdateCtr>
      <UserUpdateTitle>Edit</UserUpdateTitle>
      <Form
        initialValues={dataToUpdate}
        validationSchema={UserUpdateSchema}
        onSubmit={(values: userDataType) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        <UserUpdateForm>
          <div>
            {cols.map((col) => (
              <FomrField key={col.key} name={col.name} title={col.label} />
            ))}
          </div>
          <UserUpdateFormRight>
            <FormFileUpload
              image={dataToUpdate.avatar}
              alt="User Update Avatar"
              name="avatar"
            />
            <SubmitButton title="Update" />
          </UserUpdateFormRight>
        </UserUpdateForm>
      </Form>
    </UserUpdateCtr>
  );
};

export default UserUpdate;
