'use client';

import { CartProduct } from '@/types/CartProps';
import { createContext, useContext, useOptimistic } from 'react';

type ActionProps = {
  action:
    | 'ADDPRODUCT'
    | 'REMOVEPRODUCT'
    | 'CLEARCART'
    | 'DECREMENT'
    | 'INCREMENT';
};

type NewCartItemProps = {
  cartItem?: CartProduct;
};

type OptimisticCartType = {
  optimisticCart: CartProduct[];
  setOptimisticCart: ({
    action,
    cartItem,
  }: ActionProps & NewCartItemProps) => void;
};

const OptimisticCartContext = createContext<OptimisticCartType | undefined>(
  undefined
);

type OptimisticCartContextProviderProps = {
  cart: CartProduct[];
  children: React.ReactNode;
};

function OptimisticCartContextProvider({
  cart,
  children,
}: OptimisticCartContextProviderProps) {
  const [optimisticCart, setOptimisticCart] = useOptimistic(
    cart,
    (
      state: CartProduct[],
      { action, cartItem }: ActionProps & NewCartItemProps
    ) => {
      if (action === 'ADDPRODUCT' && cartItem) {
        return [...state, cartItem];
      } else if (action === 'REMOVEPRODUCT' && cartItem) {
        return state.filter((item) => item.productId !== cartItem.productId);
      } else if (action === 'DECREMENT' && cartItem) {
        return state.map((orgCartItem) => {
          if (orgCartItem.id === cartItem.id) {
            return { ...orgCartItem, quantity: orgCartItem.quantity - 1 };
          }
          return orgCartItem;
        });
      } else if (action === 'INCREMENT' && cartItem) {
        return state.map((orgCartItem) => {
          if (orgCartItem.id === cartItem.id) {
            return { ...orgCartItem, quantity: orgCartItem.quantity + 1 };
          }
          return orgCartItem;
        });
      } else {
        return [];
      }
    }
  );

  return (
    <OptimisticCartContext.Provider
      value={{ optimisticCart, setOptimisticCart }}
    >
      {children}
    </OptimisticCartContext.Provider>
  );
}

function useOptimisticCartContext() {
  const context = useContext(OptimisticCartContext);

  if (context === undefined) {
    throw new Error('Not valid use of useOptimisticCartContext');
  }

  return context;
}

export { OptimisticCartContextProvider, useOptimisticCartContext };
