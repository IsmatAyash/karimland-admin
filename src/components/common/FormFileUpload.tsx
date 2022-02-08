import { useFormikContext } from 'formik';
import styled from 'styled-components';
import { Publish } from '@mui/icons-material';

type FileUploadProps = {
  image: string;
  alt: string;
  name: string;
};

const FormFileUpload = ({ image, alt, name }: FileUploadProps) => {
  const { setFieldValue } = useFormikContext();
  return (
    <FileUpload>
      <FileUploadImage src={image} alt={alt} />
      <label htmlFor="file">
        <Publish style={{ cursor: 'pointer' }} />
      </label>
      <input
        type="file"
        id="file"
        name={name}
        style={{ display: 'none' }}
        onChange={(e: any | null) => setFieldValue(name, e.target.files[0])}
      />
    </FileUpload>
  );
};

const FileUpload = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 600px;
  gap: 20px;
`;

const FileUploadImage = styled.img`
  width: 90%;
  border-radius: 10px;
  object-fit: cover;
`;

export default FormFileUpload;
