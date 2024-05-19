'use client';

import { Button } from '@/components/buttons';

import { clearCartAction } from '@/actions/cart/';
import { useOptimisticCartContext } from '@/hooks/OptimisticCartProvider';
import { useStore } from '@/stores/store';

function RemoveAllButton() {
  const { optimisticCart, setOptimisticCart } = useOptimisticCartContext();
  const setIsPending = useStore((state) => state.setIsPending);

  const clearAction = async () => {
    setOptimisticCart({ action: 'CLEARCART' });
    setIsPending();
    await clearCartAction();
    setIsPending();
  };

  return (
    <form action={clearAction}>
      <Button
        className='h-auto p-0 text-foreground/50 underline hover:text-primary'
        disabled={optimisticCart.length === 0}
        type='submit'
        variant='link'
      >
        Remove all
      </Button>
    </form>
  );
}

export default RemoveAllButton;
