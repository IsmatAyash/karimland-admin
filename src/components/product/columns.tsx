import type { productDataType } from '../../types';

export const getProductCols = ({
  title,
  unit,
  price,
  category,
  inventory,
  oldPrice,
  featured,
  description,
  tags,
}: productDataType) => [
  {
    key: 1,
    label: 'Product Title',
    name: 'title' as keyof productDataType,
    value: `${title}`,
  },
  {
    key: 2,
    label: 'Unit',
    name: 'unit' as keyof productDataType,
    value: `${unit}`,
  },
  {
    key: 3,
    label: 'Price',
    name: 'price' as keyof productDataType,
    value: `${price}`,
  },
  {
    key: 4,
    label: 'Inventory',
    name: 'inventory' as keyof productDataType,
    value: `${inventory}`,
  },
  {
    key: 5,
    label: 'Category',
    name: 'category' as keyof productDataType,
    value: `${category}`,
  },
  {
    key: 6,
    label: 'Old Price',
    name: 'oldPrice' as keyof productDataType,
    value: `${oldPrice}`,
  },
  {
    key: 7,
    label: 'Featured',
    name: 'featured' as keyof productDataType,
    value: `${featured}`,
  },
  {
    key: 8,
    label: 'Description',
    name: 'description' as keyof productDataType,
    value: `${description}`,
  },
  {
    key: 9,
    label: 'Tags',
    name: 'tags' as keyof productDataType,
    value: `${tags}`,
  },
];
