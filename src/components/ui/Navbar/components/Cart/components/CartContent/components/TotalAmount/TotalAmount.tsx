'use client';

import { getTotalAmount } from '@/utils';
import { useOptimisticCartContext } from '@/hooks/OptimisticCartProvider';

function TotalAmount() {
  const { optimisticCart } = useOptimisticCartContext();
  const totalAmount = getTotalAmount(optimisticCart);

  return (
    <div className='flex justify-between'>
      <p className='font-medium text-foreground/50'>TOTAL</p>
      <p className='font-bold'>{`$ ${totalAmount}`}</p>
    </div>
  );
}

export default TotalAmount;
