import Form from '../../common/Form';
import { getProductCols } from '../columns';
import { ProductSchema } from '../validationSchema';
import type { productDataType } from '../../../types';
import {
  ProductCtr,
  ProductTitle,
  ProductForm,
  ProductFormRight,
  ProductFormLeft,
} from './newProduct.styled';
import FomrField from '../../common/FomrField';
import SubmitButton from '../../common/SubmitButton';
import FormFileUpload from '../../common/FormFileUpload';

const initialValues: productDataType = {
  id: '',
  title: '',
  unit: '',
  price: 0,
  category: 'Veges',
  image: '',
  inventory: 0,
  oldPrice: 0,
  featured: false,
  description: [],
  tags: [],
};

const NewProduct = () => {
  const cols = getProductCols(initialValues);

  return (
    <ProductCtr>
      <ProductTitle>Create New Product</ProductTitle>
      <Form
        initialValues={initialValues}
        validationSchema={ProductSchema}
        onSubmit={(values: productDataType) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        <ProductForm>
          <ProductFormLeft>
            <FormFileUpload
              image="/product_placeholder.png"
              alt="New Product Image"
              name="image"
            />
          </ProductFormLeft>
          <ProductFormRight>
            {cols.map((col) => (
              <FomrField key={col.key} name={col.name} title={col.label} />
            ))}
            <SubmitButton title="Create Product" />
          </ProductFormRight>
        </ProductForm>
      </Form>
    </ProductCtr>
  );
};

export default NewProduct;
