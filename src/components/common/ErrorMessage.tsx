import styled from 'styled-components';

interface errorProps {
  error: string | undefined;
  visible: boolean | undefined;
}

const ErrorMessage = ({ error, visible }: errorProps) => {
  if (!visible && !error) return null;
  return <Error>{error}</Error>;
};

const Error = styled.div`
  color: var(--red-dark);
`;

export default ErrorMessage;
