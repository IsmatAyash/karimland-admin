import { Formik } from 'formik';
import { ReactNode } from 'react';

function Form<T>({
  initialValues,
  validationSchema,
  onSubmit,
  children,
}: {
  initialValues: T;
  validationSchema: any;
  onSubmit: (payload: T) => Promise<any> | void;
  children: ReactNode;
}) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => <>{children}</>}
    </Formik>
  );
}

export default Form;
