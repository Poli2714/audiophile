import { CartProduct } from '@/types/CartProps';

export const getTotalAmount = (cart: Array<CartProduct>) =>
  cart.reduce(
    (acc, cartItem) => acc + cartItem.quantity * cartItem.product.price,
    0
  );
