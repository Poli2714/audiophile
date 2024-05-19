'use client';

import { CartItem } from '@/components/ui';
import CartItemButtons from '../CartItemButtons/CartItemButtons';

import { useOptimisticCartContext } from '@/hooks/OptimisticCartProvider';

function CartItemList() {
  const { optimisticCart } = useOptimisticCartContext();

  return (
    <ul className='flex flex-col gap-y-6'>
      {optimisticCart.map((cartItem) => (
        <li key={cartItem.id}>
          <CartItem cartItem={cartItem.product}>
            <CartItemButtons cartItemId={cartItem.id} />
          </CartItem>
        </li>
      ))}
    </ul>
  );
}

export default CartItemList;
