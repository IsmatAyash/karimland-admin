import {
  Container,
  LeftCtr,
  ProductInfoItems,
  ProductInfoItem,
  ProductImageCtr,
  ProductTitle,
  ProductValue,
  RightCtr,
} from './productDetails.styled';
import { productDataType } from '../../../types';
import Chart from '../../common/Chart';
import { productData } from '../../../data';

const ProductDetails = ({ image, title }: productDataType) => {
  return (
    <Container>
      <LeftCtr>
        <Chart title="Product Sales" data={productData} grid dataKey="Sales" />
      </LeftCtr>
      <RightCtr>
        <ProductInfoItems>
          <ProductInfoItem>
            <ProductTitle>Title</ProductTitle>
            <ProductValue>Organic Onion</ProductValue>
          </ProductInfoItem>
          <ProductInfoItem>
            <ProductTitle>Sales</ProductTitle>
            <ProductValue>$2,340</ProductValue>
          </ProductInfoItem>
          <ProductInfoItem>
            <ProductTitle>Status</ProductTitle>
            <ProductValue>Active</ProductValue>
          </ProductInfoItem>
          <ProductInfoItem>
            <ProductTitle>In Stock</ProductTitle>
            <ProductValue>Yes</ProductValue>
          </ProductInfoItem>
        </ProductInfoItems>
        <ProductImageCtr>
          <img src={image} alt={title} />
        </ProductImageCtr>
      </RightCtr>
    </Container>
  );
};

export default ProductDetails;
