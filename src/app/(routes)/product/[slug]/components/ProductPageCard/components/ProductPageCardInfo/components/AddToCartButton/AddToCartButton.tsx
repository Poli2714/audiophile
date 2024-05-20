'use client';

import { useTransition } from 'react';
import { Loader2 } from 'lucide-react';

import { addToCartAction } from '@/actions/cart';
import { Button } from '@/components/buttons';
import { useStore } from '@/stores/store';

type AddToCartButtonProps = {
  productId: string;
};

function AddToCartButton({ productId }: AddToCartButtonProps) {
  const { quantity, reset } = useStore((state) => ({
    quantity: state.qty,
    reset: state.reset,
  }));
  const [isPending, startTransition] = useTransition();

  const cartAction = () => {
    startTransition(async () => await addToCartAction(productId, quantity));
    reset();
  };

  return (
    <form action={cartAction}>
      <Button className='tracking-wider' disabled={isPending} type='submit'>
        {isPending && <Loader2 size={20} className='mr-2 animate-spin' />}
        ADD TO CART
      </Button>
    </form>
  );
}

export default AddToCartButton;
