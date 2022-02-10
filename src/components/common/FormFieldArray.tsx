import { Add, Remove } from '@mui/icons-material';
import { Field, FieldArray, useFormikContext } from 'formik';
import styled from 'styled-components';

function FomrFieldArray({
  description,
  title,
}: {
  description: { title: string; detail: string }[];
  title: string;
}) {
  const { handleChange } = useFormikContext();
  return (
    <FormItem>
      <Label>{title}</Label>
      <FieldArray
        name="description"
        render={(arrayHelpers) => (
          <div>
            {description.map((item, index) => {
              return (
                <div key={index}>
                  {/** both these conventions do the same */}
                  <Label htmlFor={`description.${index}.title`}>Title</Label>
                  <InputField
                    name={`description[${index}].title`}
                    onChange={handleChange(`description[${index}].title`)}
                  />
                  <Label htmlFor={`description.${index}.detail`}>Detail</Label>
                  <InputField
                    name={`description[${index}].detail`}
                    onChange={handleChange(`description[${index}].detail`)}
                  />

                  <button
                    style={{ margin: 5 }}
                    type="button"
                    onClick={() => arrayHelpers.remove(index)}
                  >
                    <Remove style={{ cursor: 'pointer', fontSize: '15px' }} />
                  </button>
                </div>
              );
            })}
            <button
              type="button"
              onClick={() => arrayHelpers.push({ title: '', detail: '' })}
            >
              <Add style={{ cursor: 'pointer', fontSize: '20px' }} />
            </button>
          </div>
        )}
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
  margin-right: 7px;
  margin-bottom: 5px;
  font-size: 14px;
  color: var(--grey-700);
`;

const InputField = styled(Field)`
  /* border: none; */
  width: 35%;
  height: 20px;
  margin-right: 5px;
  /* border-bottom: 1px solid var(--grey-500); */
`;

export default FomrFieldArray;
