'use client';

import Image from 'next/image';

type Product = {
  image: {
    cart: string | null;
  } | null;
  name: string;
  price: number;
  slug: string;
};

type CartItemProps = {
  cartItem: Product;
  children: React.ReactNode;
};

function CartItem({ cartItem, children }: CartItemProps) {
  return (
    <div className='grid grid-cols-[min-content_1fr] items-center gap-x-4'>
      <div className='h-16 w-16 rounded-lg'>
        <Image
          className='rounded-lg'
          alt={cartItem.name}
          src={cartItem.image?.cart as string}
          height={64}
          width={64}
        />
      </div>
      <div className='grid grid-cols-[1fr_min-content] [&>p:last-child]:col-start-2'>
        <h4 className='text-[15px] font-bold'>
          {cartItem.name
            .split(' ')
            .slice(0, -1)
            .join(' ')
            .replace('Mark', 'MK')}
        </h4>
        <p className='row-start-2 text-[14px]'>{`$ ${cartItem.price.toLocaleString()}`}</p>
        {children}
      </div>
    </div>
  );
}

export default CartItem;
