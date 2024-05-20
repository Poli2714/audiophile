import Link from 'next/link';

import { CheckoutPageContent } from './components';
import getCartItems from '@/drizzle/schema/cartItems/handler';
import { getCurrentUser } from '@/utils/getCurrentUser/getCurrentUser';

async function Checkout() {
  const { isUserSignedIn, userId } = await getCurrentUser();

  let content = (
    <div>
      <p>Your cart is empty.</p>
    </div>
  );

  if (!!userId) {
    const cartItems = await getCartItems(isUserSignedIn, userId);

    if (cartItems.length > 0) {
      content = (
        <>
          <div className='mb-6 mt-[clamp(1rem,_4.2vw,_4rem)] px-[clamp(1.5rem,_6.4vw,_4rem)] xxl:container lg:px-[clamp(4.5rem,_9.3vw,_10.3125rem)]'>
            <Link className='place-self-start text-foreground/50' href='/'>
              Go back
            </Link>
          </div>
          <main className='grid gap-[clamp(5.5rem,_12.5vw,_10rem)] px-[clamp(1.5rem,_6.4vw,_4rem)] xxl:container lg:px-[clamp(4.5rem,_9.3vw,_10.3125rem)]'>
            <CheckoutPageContent />
          </main>
        </>
      );
    }
  }

  return content;
}

export default Checkout;
