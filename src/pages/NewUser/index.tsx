import {
  NewUserBtn,
  NewUserCtr,
  NewUserForm,
  NewUserGender,
  NewUserItem,
  NewUserSelect,
  NewUserTitle,
} from './newUser.styled';

const NewUser = () => {
  return (
    <NewUserCtr>
      <NewUserTitle>Create New User</NewUserTitle>
      <NewUserForm>
        <NewUserItem>
          <label>User Name</label>
          <input type="text" placeholder="User name" />
        </NewUserItem>
        <NewUserItem>
          <label>Email</label>
          <input type="email" placeholder="Email" />
        </NewUserItem>
        <NewUserItem>
          <label>Password</label>
          <input type="password" placeholder="Password" />
        </NewUserItem>
        <NewUserItem>
          <label>User Type</label>
          <input type="text" placeholder="User type" />
        </NewUserItem>
        <NewUserItem>
          <label>Gender</label>
          <NewUserGender>
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label htmlFor="female">Female</label>
          </NewUserGender>
        </NewUserItem>
        <NewUserItem>
          <label>Phone</label>
          <input type="text" placeholder="Phone" />
        </NewUserItem>
        <NewUserItem>
          <label>Shipping Address</label>
          <input type="text" placeholder="Shipping address" />
        </NewUserItem>
        <NewUserItem>
          <label>Country</label>
          <input type="text" placeholder="Country" />
        </NewUserItem>
        <NewUserItem>
          <label>Status</label>
          <NewUserSelect name="active" id="active">
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </NewUserSelect>
        </NewUserItem>
        <NewUserBtn>Create User</NewUserBtn>
      </NewUserForm>
    </NewUserCtr>
  );
};

export default NewUser;
