import { ShoppingCartIcon } from 'lucide-react';

import { IconButton } from '@/components/buttons';

type CartButtonProps = {
  isCartEmpty: boolean;
};

function CartButton({ isCartEmpty }: CartButtonProps) {
  return (
    <IconButton>
      <div className='relative'>
        {!isCartEmpty ? (
          <div className='absolute right-[-5px] top-[-5px] h-2 w-2 animate-pulse rounded-full bg-primary'></div>
        ) : null}
        <ShoppingCartIcon size={20} />
      </div>
    </IconButton>
  );
}

export default CartButton;
