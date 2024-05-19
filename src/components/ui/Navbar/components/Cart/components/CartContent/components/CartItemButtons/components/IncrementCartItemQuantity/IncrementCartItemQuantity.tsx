'use client';

import { Button } from '@/components/buttons';

import { CartProduct } from '@/types/CartProps';
import { incrementCartItemQuantity } from '@/actions/cart';
import { useOptimisticCartContext } from '@/hooks/OptimisticCartProvider';
import { useStore } from '@/stores/store';

type IncrementCartItemQuantityProps = {
  cartItem: CartProduct;
};

function IncrementCartItemQuantity({
  cartItem,
}: IncrementCartItemQuantityProps) {
  const { setOptimisticCart } = useOptimisticCartContext();
  const setIsPending = useStore((state) => state.setIsPending);

  const incrementAction = async () => {
    setOptimisticCart({ action: 'INCREMENT', cartItem });
    setIsPending();
    await incrementCartItemQuantity(cartItem.quantity, cartItem.productId);
    setIsPending();
  };

  return (
    <form action={incrementAction} className='h-full w-8'>
      <Button
        className='h-full w-full text-foreground/50 hover:text-primary'
        size='icon'
        type='submit'
        variant={null}
      >
        +
      </Button>
    </form>
  );
}

export default IncrementCartItemQuantity;
