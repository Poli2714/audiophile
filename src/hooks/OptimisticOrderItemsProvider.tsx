'use client';

import { OrderItems } from '@/types/Orders';
import { createContext, useContext, useOptimistic } from 'react';

type ActionProps = {
  action: 'ADDTOORDER';
};

type NewOrderItemProps = {
  newOrderItems: OrderItems;
};

type OptimisticOrderItemType = {
  optimisticOrderItems: OrderItems;
  setOptimisticOrderItems: ({
    action,
    newOrderItems,
  }: ActionProps & NewOrderItemProps) => void;
};

const OptimisticOrderItemContext = createContext<
  OptimisticOrderItemType | undefined
>(undefined);

type OptimisticOrderItemContextProviderProps = {
  orderItems: OrderItems;
  children: React.ReactNode;
};

function OptimisticOrderItemContextProvider({
  orderItems,
  children,
}: OptimisticOrderItemContextProviderProps) {
  const [optimisticOrderItems, setOptimisticOrderItems] = useOptimistic(
    orderItems,
    (
      currentState: OrderItems,
      { action, newOrderItems }: ActionProps & NewOrderItemProps
    ) => {
      if (action === 'ADDTOORDER') {
        return [...currentState, ...newOrderItems];
      } else {
        return [];
      }
    }
  );

  return (
    <OptimisticOrderItemContext.Provider
      value={{ optimisticOrderItems, setOptimisticOrderItems }}
    >
      {children}
    </OptimisticOrderItemContext.Provider>
  );
}

function useOptimisticOrderItemContext() {
  const context = useContext(OptimisticOrderItemContext);

  if (context === undefined) {
    throw new Error('Not valid use of useOptimisticOrderItemContext');
  }

  return context;
}

export { OptimisticOrderItemContextProvider, useOptimisticOrderItemContext };
