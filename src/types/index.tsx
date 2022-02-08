export type userDataType = {
  id: string;
  fullName: string;
  email: string;
  country: string;
  status: string;
  shippingAddress: string;
  billingAddress: string;
  avatar: string;
  userType: string;
  phone: string;
};

export type productDataType = {
  id: string;
  title: string;
  unit: string;
  price: number;
  image: string;
  category: string;
  inventory: number;
  featured: boolean;
  oldPrice: number;
  description: { title: string; detail: string }[];
  tags: string[];
};
