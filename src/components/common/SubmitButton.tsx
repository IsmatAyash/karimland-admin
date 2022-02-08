import { useFormikContext } from 'formik';
import styled from 'styled-components';

type ButtonProp = {
  title: string;
};

const SubmitButton = ({ title }: ButtonProp) => {
  const { handleSubmit } = useFormikContext();
  return (
    <Button type="submit" onClick={(e) => handleSubmit()}>
      {title}
    </Button>
  );
};

const Button = styled.button`
  margin: 20px;
  border-radius: 5px;
  border: none;
  padding: 5px;
  cursor: pointer;
  background-color: var(--primary-500);
  color: var(--white);
  font-weight: 600;
`;

export default SubmitButton;
