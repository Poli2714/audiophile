import { Navbar, PageFooter } from '@/components/ui';

import { CartProduct } from '@/types/CartProps';
import { db } from '@/drizzle/db';
import getCartItems from '@/drizzle/schema/cartItems/handler';
import { getCurrentUser } from '@/utils/getCurrentUser/getCurrentUser';
import { OptimisticCartContextProvider } from '@/hooks/OptimisticCartProvider';

type RouteLayoutType = {
  children: React.ReactNode;
};

async function RouteLayout({ children }: RouteLayoutType) {
  let cart: CartProduct[] = [];
  let userName: string | undefined | null;
  const { isUserSignedIn, userId } = await getCurrentUser();
  if (!!userId) {
    cart = await getCartItems(isUserSignedIn, userId);
    const user = await db.query.users.findFirst({
      columns: {
        name: true,
      },
      where: (users, { eq }) => eq(users.id, userId),
    });
    userName = user?.name;
  }

  return (
    <>
      <OptimisticCartContextProvider cart={cart}>
        <header className='bg-foreground'>
          <div className='px-[clamp(1.5rem,_6.4vw,_4rem)] xxl:container lg:px-[clamp(4.5rem,_9.3vw,_10.3125rem)]'>
            <Navbar
              isUserSignedIn={isUserSignedIn}
              isCartEmpty={cart.length === 0}
              userName={userName}
            />
          </div>
        </header>
        {children}
      </OptimisticCartContextProvider>
      <PageFooter />
    </>
  );
}

export default RouteLayout;
