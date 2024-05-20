'use client';

import { CartItem, CheckoutProductQuantity } from '@/components/ui';
import { useOptimisticCartContext } from '@/hooks/OptimisticCartProvider';

function CheckoutItemList() {
  const { optimisticCart } = useOptimisticCartContext();

  return (
    <ul className='flex flex-col gap-y-6'>
      {optimisticCart.map((cartItem) => (
        <li key={cartItem.id}>
          <CartItem cartItem={cartItem.product}>
            <CheckoutProductQuantity quantity={cartItem.quantity} />
          </CartItem>
        </li>
      ))}
    </ul>
  );
}

export default CheckoutItemList;
