'use client';

import { DialogHeader, DialogTitle } from '@/components/ui';
import { RemoveAllButton } from './components';

import { useOptimisticCartContext } from '@/hooks/OptimisticCartProvider';

function CartHeader() {
  const { optimisticCart } = useOptimisticCartContext();

  return (
    <DialogHeader className='flex h-12 flex-row items-center space-y-0 [&_:last-child]:ml-auto'>
      <DialogTitle className='text-lg tracking-wide'>
        CART ({`${optimisticCart.length}`})
      </DialogTitle>
      <RemoveAllButton />
    </DialogHeader>
  );
}

export default CartHeader;
