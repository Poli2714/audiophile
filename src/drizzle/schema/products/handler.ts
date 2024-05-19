import { db } from '@/drizzle/db';
import { cartItems } from '../cartItems/schema';
import { anonCartItems } from '../anonCartItems/schema';
import { and, eq } from 'drizzle-orm';
import { UserType } from '@/types/Users';
import { UserProduct } from '@/types/Cart';

async function getProduct(slug: string) {
  const product = await db.query.products.findFirst({
    columns: {
      id: true,
      slug: true,
      name: true,
      new: true,
      price: true,
      description: true,
    },
    where: (products, { eq }) => eq(products.slug, slug),
    with: {
      accessories: {
        columns: {
          id: true,
          name: true,
          quantity: true,
        },
      },
      image: {
        columns: {
          gallery1: true,
          gallery2: true,
          gallery3: true,
          mobile: true,
          tablet: true,
          desktop: true,
        },
      },
      features: {
        columns: {
          id: true,
          feature: true,
        },
      },
      relatedProducts: {
        columns: {
          id: true,
          slug: true,
          name: true,
          mobile: true,
          tablet: true,
          desktop: true,
        },
      },
    },
  });

  return product;
}

async function getProductForCart(productId: string) {
  const product = await db.query.products.findFirst({
    where: (products, { eq }) => eq(products.id, productId),
    columns: {
      slug: true,
      name: true,
      price: true,
    },
    with: {
      image: {
        columns: {
          cart: true,
        },
      },
    },
  });

  return product;
}

async function getProductsByCategory(category: string) {
  const productsByCategory = await db.query.products.findMany({
    columns: {
      id: true,
      slug: true,
      name: true,
      new: true,
      description: true,
    },
    where: (products, { eq }) => eq(products.category, category),
    orderBy: (products, { desc }) => [desc(products.new), desc(products.id)],
    with: {
      image: {
        columns: {
          catDesktop: true,
          catTablet: true,
          catMobile: true,
        },
      },
    },
  });

  return productsByCategory;
}

type ProductInCartProps = UserType & UserProduct;

async function isProductInCart({
  isUserSignedIn,
  productId,
  userId,
}: ProductInCartProps) {
  const cart = isUserSignedIn ? cartItems : anonCartItems;

  try {
    const product = await db
      .select()
      .from(cart)
      .where(and(eq(cart.productId, productId), eq(cart.userId, userId)));

    return product.length > 0;
  } catch (error) {
    throw new Error();
  }
}

async function getProductQuantity({
  isUserSignedIn,
  productId,
  userId,
}: ProductInCartProps) {
  const table = isUserSignedIn ? cartItems : anonCartItems;

  try {
    const cartItem = await db
      .select({
        quantity: table.quantity,
      })
      .from(table)
      .where(and(eq(table.productId, productId), eq(table.userId, userId)));

    if (cartItem.length > 0) {
      return cartItem[0].quantity;
    } else return 0;
  } catch (error) {
    throw new Error();
  }
}

export {
  isProductInCart,
  getProduct,
  getProductForCart,
  getProductsByCategory,
  getProductQuantity,
};
