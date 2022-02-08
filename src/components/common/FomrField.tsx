import { Field, useFormikContext } from 'formik';
import ErrorMessage from './ErrorMessage';
import styled from 'styled-components';

function FomrField<T>({
  name,
  title,
  ...rest
}: {
  name: keyof T;
  title: string;
}) {
  const { errors, touched, handleChange } = useFormikContext();
  return (
    <FormItem>
      <Label htmlFor={name as string | undefined}>{title}</Label>
      <InputField name={name} onChange={handleChange(name)} {...rest} />
      <ErrorMessage
        // error={(errors as FormikErrors<T>)[name]}
        // visible={(touched as FormikTouched<T>)[name]}
        error={(errors as any)[name]}
        visible={(touched as any)[name]}
      />
    </FormItem>
  );
}

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  width: 100%;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-size: 14px;
  color: var(--grey-600);
`;

const InputField = styled(Field)`
  border: none;
  width: 100%;
  height: 30px;
  border-bottom: 1px solid var(--grey-500);
`;

export default FomrField;
