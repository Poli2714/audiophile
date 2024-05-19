'use client';

import { Button } from '@/components/buttons';

import { CartProduct } from '@/types/CartProps';
import { decrementCartItemQuantityAction } from '@/actions/cart';
import { useOptimisticCartContext } from '@/hooks/OptimisticCartProvider';
import { useStore } from '@/stores/store';

type DecrementCartItemQuantityProps = {
  cartItem: CartProduct;
};

function DecrementCartItemQuantity({
  cartItem,
}: DecrementCartItemQuantityProps) {
  const { setOptimisticCart } = useOptimisticCartContext();
  const setIsPending = useStore((state) => state.setIsPending);

  const decrementAction = async () => {
    setOptimisticCart({ action: 'DECREMENT', cartItem });
    if (cartItem.quantity === 1) {
      setOptimisticCart({
        action: 'REMOVEPRODUCT',
        cartItem: cartItem,
      });
    }
    setIsPending();
    await decrementCartItemQuantityAction(
      cartItem.quantity,
      cartItem.productId
    );
    setIsPending();
  };

  return (
    <form action={decrementAction} className='h-full w-8'>
      <Button
        className='h-full w-full text-foreground/50 hover:text-primary'
        size='icon'
        type='submit'
        variant={null}
      >
        -
      </Button>
    </form>
  );
}

export default DecrementCartItemQuantity;
