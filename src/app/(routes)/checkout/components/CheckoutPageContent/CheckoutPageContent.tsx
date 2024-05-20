'use client';

import { CheckoutForm, OrderSummary } from './components';
import { OptimisticOrderItemContextProvider } from '@/hooks/OptimisticOrderItemsProvider';
import { useOptimisticCartContext } from '@/hooks/OptimisticCartProvider';

function CheckoutPageContent() {
  const { optimisticCart } = useOptimisticCartContext();

  const orderItems = optimisticCart.map((optimisticCartItem) => ({
    id: optimisticCartItem.id,
    quantity: optimisticCartItem.quantity,
    product: { ...optimisticCartItem.product },
  }));

  return (
    <OptimisticOrderItemContextProvider orderItems={orderItems}>
      <CheckoutForm>
        <OrderSummary />
      </CheckoutForm>
    </OptimisticOrderItemContextProvider>
  );
}

export default CheckoutPageContent;
