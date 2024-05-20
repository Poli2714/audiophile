'use client';

import { CartItem, CheckoutProductQuantity, Separator } from '@/components/ui';
import { useOptimisticOrderItemContext } from '@/hooks/OptimisticOrderItemsProvider';
import { OrderItems } from '@/types/Orders';

const SHIPPING_AMOUNT = 50;

const getOrderTotal = (orderItems: OrderItems) =>
  orderItems.reduce(
    (acc, orderItem) => acc + orderItem.quantity * orderItem.product.price,
    0
  );

function OrderSummaryContent() {
  const { optimisticOrderItems } = useOptimisticOrderItemContext();

  let grandTotal: string = '';

  if (optimisticOrderItems.length > 0) {
    const totalAmount = getOrderTotal(optimisticOrderItems);
    const tax = totalAmount * 0.2;
    grandTotal = (totalAmount + tax + SHIPPING_AMOUNT).toFixed(2);
  }

  return optimisticOrderItems.length > 0 ? (
    <>
      <div className='rounded-t-lg bg-card p-6 lg:col-span-3 lg:rounded-s-lg lg:rounded-tr-none'>
        <CartItem cartItem={optimisticOrderItems[0].product}>
          <CheckoutProductQuantity
            quantity={optimisticOrderItems[0].quantity}
          />
        </CartItem>
        {optimisticOrderItems.length > 1 ? (
          <>
            <Separator className='my-3' />
            <p className='text-center text-foreground/50'>{`And ${optimisticOrderItems.length - 1} other item(s)`}</p>
          </>
        ) : null}
      </div>
      <div className='space-y-3 rounded-b-lg bg-foreground p-6 text-background/50 lg:col-span-2 lg:place-content-center lg:rounded-e-lg lg:rounded-bl-none'>
        <h3>GRAND TOTAL</h3>
        <p className='text-background'>{`$ ${grandTotal}`}</p>
      </div>
    </>
  ) : null;
}

export default OrderSummaryContent;
