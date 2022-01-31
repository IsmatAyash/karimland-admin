import styled from 'styled-components';

type InputProps = {
  label: string;
  type?: string;
  value: any;
};

const FormInput = ({ label, type, value }: InputProps) => {
  return (
    <>
      <Label>{label}</Label>
      <Input
        type={type ? type : 'text'}
        name={value.toString()}
        value={value}
        placeholder={label}
      />
    </>
  );
};

const Label = styled.label`
  margin-bottom: 5px;
  font-size: 14px;
  color: var(--grey-600);
`;

const Input = styled.input`
  border: none;
  width: 250px;
  height: 30px;
  border-bottom: 1px solid var(--grey-500);
`;

export default FormInput;
