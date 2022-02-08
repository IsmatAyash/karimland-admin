import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Add } from '@mui/icons-material';
import { Link, Outlet } from 'react-router-dom';

import {
  ProductsCtr,
  ProductCtr,
  ProductImage,
  ProductEditBtn,
  ProductDeleteBtn,
  ProductAddBtn,
  ProductAddBtnText,
} from './products.styled';
import { productRows } from '../../data';
import { productDataType } from '../../types';

const Products = () => {
  const [productData, setProductData] =
    useState<productDataType[]>(productRows);

  useEffect(() => setProductData(productRows), []);
  const handleDelete = (id: string) => {
    setProductData(productData.filter((d) => d.id !== id));
  };

  type imageProp = { image: string; title: string };
  const renderImage = ({ image, title }: imageProp) => {
    return (
      <ProductCtr>
        <ProductImage src={image} alt={title} />
        {title}
      </ProductCtr>
    );
  };

  type actionsProp = { id: string };
  const renderActions = ({ id }: actionsProp) => {
    return (
      <>
        <Link to={`${id}`}>
          <ProductEditBtn>Edit Product</ProductEditBtn>
        </Link>
        <ProductDeleteBtn onClick={() => handleDelete(id)} />
      </>
    );
  };

  const columns = [
    {
      field: 'title',
      headerName: 'Product',
      width: 200,
      renderCell: (params: any) => renderImage(params.row),
    },
    { field: 'category', headerName: 'Category', width: 100 },
    { field: 'unit', headerName: 'Unit', width: 100 },
    { field: 'price', headerName: 'Price', width: 120 },
    { field: 'inventory', headerName: 'Inventory', width: 100 },
    { field: 'oldPrice', headerName: 'Old Price', width: 100 },
    { field: 'featured', headerName: 'Featured', width: 100 },
    {
      field: 'actions',
      headerName: 'Action',
      width: 150,
      sortable: false,
      renderCell: (params: any) => renderActions(params.row),
    },
  ];

  return (
    <ProductsCtr>
      <Link to="newProduct" style={{ textDecoration: 'none' }}>
        <ProductAddBtn>
          <Add />
          <ProductAddBtnText>New Product</ProductAddBtnText>
        </ProductAddBtn>
      </Link>
      <DataGrid
        style={{ width: '99%' }}
        rows={productData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
      <Outlet context={{ productData, setProductData }} />
      {/* <Outlet context={userRow} /> */}
    </ProductsCtr>
  );
};

export default Products;
