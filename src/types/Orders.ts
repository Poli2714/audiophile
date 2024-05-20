export type OrderItems = Array<{
  id: string;
  quantity: number;
  product: {
    name: string;
    slug: string;
    price: number;
    image: {
      cart: string | null;
    } | null;
  };
}>;
