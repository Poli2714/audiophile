import { ShoppingCartIcon } from 'lucide-react';

import { IconButton } from '@/components/buttons';

function CartButton() {
  return (
    <IconButton>
      <ShoppingCartIcon size={20} />
    </IconButton>
  );
}

export default CartButton;
