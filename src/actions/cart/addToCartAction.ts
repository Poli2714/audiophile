'use server';

import { revalidateTag } from 'next/cache';

import {
  getProductQuantity,
  isProductInCart,
} from '@/drizzle/schema/products/handler';
import { getCurrentUserAction } from '@/actions/user';
import {
  addItemsToCart,
  incrementCartItemQuantityByNumber,
} from '@/actions/cart';

export async function addToCartAction(productId: string, newQuantity: number) {
  const { isUserSignedIn, userId } = await getCurrentUserAction();
  const tag = isUserSignedIn ? 'cartItem' : 'anonCartItem';

  try {
    const isInCart = await isProductInCart({
      isUserSignedIn,
      productId,
      userId,
    });

    if (isInCart) {
      const oldQuantity = await getProductQuantity({
        isUserSignedIn,
        productId,
        userId,
      });
      const updatedQuantity = oldQuantity + newQuantity;

      await incrementCartItemQuantityByNumber({
        isUserSignedIn,
        productId,
        quantity: updatedQuantity,
        userId,
      });
    } else {
      await addItemsToCart({
        isUserSignedIn,
        productId,
        quantity: newQuantity,
        userId,
      });
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error();
    }
  }
  revalidateTag(tag);
}
