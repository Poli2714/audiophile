import { Navbar, Separator } from '@/components/ui';
import { PageHero } from './components';

import { CartProduct } from '@/types/CartProps';
import { db } from '@/drizzle/db';
import getCartItems from '@/drizzle/schema/cartItems/handler';
import { getCurrentUser } from '@/utils/getCurrentUser/getCurrentUser';
import { OptimisticCartContextProvider } from '@/hooks/OptimisticCartProvider';

async function PageHeader() {
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
    <header className='bg-[url("/images/home/mobile/image-header.jpg")] bg-cover bg-center bg-no-repeat md:bg-[url("/images/home/tablet/image-header.jpg")] xl:bg-[url("/images/home/desktop/image-header.jpg")] xl:bg-right'>
      <div className='flex h-[clamp(37.5rem,_99vw,_46rem)] flex-col px-[clamp(1.5rem,_7.5vw,_10rem)] xxl:container'>
        <OptimisticCartContextProvider cart={cart}>
          <Navbar isUserSignedIn={isUserSignedIn} userName={userName} />
        </OptimisticCartContextProvider>
        <Separator className='bg-card/10' />
        <PageHero />
      </div>
    </header>
  );
}

export default PageHeader;
