'use client';

import { useOptimisticCartContext } from '@/hooks/OptimisticCartProvider';
import { getTotalAmount } from '@/utils';

const SHIPPING_AMOUNT = 50;

function CheckoutTotalAmount() {
  const { optimisticCart } = useOptimisticCartContext();

  const totalAmount = Number(getTotalAmount(optimisticCart));
  const tax = totalAmount * 0.2;
  const grandTotal = totalAmount + tax + SHIPPING_AMOUNT;

  return (
    <div className='space-y-6 text-foreground/50'>
      <div className='space-y-2'>
        <div className='flex justify-between'>
          <p className='font-medium'>TOTAL</p>
          <p className='font-bold text-foreground'>{`$ ${totalAmount}`}</p>
        </div>
        <div className='flex justify-between'>
          <p>SHIPPING</p>
          <p className='text-[1.125rem] font-bold text-foreground'>{`$ ${SHIPPING_AMOUNT}`}</p>
        </div>
        <div className='flex justify-between'>
          <p>TAX (INCLUDED)</p>
          <p className='text-[1.125rem] font-bold text-foreground'>{`$ ${tax.toFixed(2)}`}</p>
        </div>
      </div>
      <div className='flex justify-between'>
        <p>GRAND TOTAL</p>
        <p className='text-[1.125rem] font-bold text-primary'>
          {`$ ${grandTotal.toFixed(2)}`}
        </p>
      </div>
    </div>
  );
}

export default CheckoutTotalAmount;
