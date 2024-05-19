'use client';

import { CartItemList, TotalAmount } from './components';

import { useOptimisticCartContext } from '@/hooks/OptimisticCartProvider';

function CartContent() {
  const { optimisticCart } = useOptimisticCartContext();

  return optimisticCart.length === 0 ? (
    <div className='text-center text-foreground/50'>
      Your audiophile cart is empty.
    </div>
  ) : (
    <>
      <CartItemList />
      <TotalAmount />
    </>
  );
}

export default CartContent;
