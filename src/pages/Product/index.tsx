import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProductCtr } from './product.styled';
import { productDataType } from '../../types';
import ProductDetails from '../../components/product/ProductDetails';
import { getProductById } from '../../data';
import NewProduct from '../../components/product/NewProduct';
import ProductUpdate from '../../components/product/ProductUpdate';

const Product = () => {
  const [productData, setProductData] = useState<productDataType | null>(null);
  const { productId } = useParams();

  useEffect(() => {
    if (productId) setProductData(getProductById(productId));
  }, [productId]);

  return (
    <ProductCtr>
      {productData ? (
        <>
          <ProductDetails {...productData} />
          <ProductUpdate {...productData} />
        </>
      ) : (
        <NewProduct />
      )}
    </ProductCtr>
  );
};

export default Product;
