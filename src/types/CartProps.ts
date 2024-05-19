export type CartProduct = {
  id: string;
  productId: string;
  quantity: number;
  userId: string;
  product: {
    image: {
      cart: string | null;
    } | null;
    name: string;
    price: number;
    slug: string;
  };
};

export type CartActionProps = {
  itemQuantity: number;
  productId: string;
};
