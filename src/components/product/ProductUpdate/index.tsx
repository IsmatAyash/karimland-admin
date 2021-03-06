import { productDataType } from '../../../types';
import Form from '../../common/Form';
import FormFileUpload from '../../common/FormFileUpload';
import FomrField from '../../common/FomrField';
import SubmitButton from '../../common/SubmitButton';
import { getProductCols } from '../columns';
import { ProductSchema } from '../validationSchema';
import {
  Container,
  ProductTitle,
  ProductForm,
  ProductFormLeft,
  ProductFormRight,
} from './productUpdate.styled';
import FomrFieldArray from '../../common/FormFieldArray';

const ProductUpdate = (productData: productDataType) => {
  const { image, title, description } = productData;
  const cols = getProductCols(productData);
  return (
    <Container>
      <ProductTitle>Edit Product</ProductTitle>
      <Form
        initialValues={productData}
        validationSchema={ProductSchema}
        onSubmit={(values: productDataType) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        <ProductForm>
          <ProductFormLeft>
            <FormFileUpload image={image} alt={`${title}-image`} name="image" />
          </ProductFormLeft>
          <ProductFormRight>
            {cols.map((col) => {
              return col.name === 'description' ? (
                <FomrFieldArray
                  key={col.key}
                  description={description}
                  title={col.label}
                />
              ) : (
                <FomrField key={col.key} name={col.name} title={col.label} />
              );
            })}
            <SubmitButton title="Update Product" />
          </ProductFormRight>
        </ProductForm>
      </Form>
    </Container>
  );
};

export default ProductUpdate;
