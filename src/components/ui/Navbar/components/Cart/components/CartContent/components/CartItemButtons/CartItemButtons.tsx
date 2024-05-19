'use client';

import {
  DecrementCartItemQuantity,
  IncrementCartItemQuantity,
} from './components';

import { useOptimisticCartContext } from '@/hooks/OptimisticCartProvider';

type CartItemButtonsProps = {
  cartItemId: string;
};

function CartItemButtons({ cartItemId }: CartItemButtonsProps) {
  const { optimisticCart } = useOptimisticCartContext();

  const cartItem = optimisticCart.filter(
    (optCartItem) => optCartItem.id === cartItemId
  )[0];

  return (
    <div className='row-span-2 flex h-8 w-24 items-center justify-between place-self-center bg-card text-[13px]'>
      <DecrementCartItemQuantity cartItem={cartItem} />
      <span className='font-bold'>{cartItem.quantity}</span>
      <IncrementCartItemQuantity cartItem={cartItem} />
    </div>
  );
}

export default CartItemButtons;
