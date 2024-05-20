import { CartButton, CartContent, CartFooter, CartHeader } from './components';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui';

type CartProps = {
  isCartEmpty: boolean;
};

function Cart({ isCartEmpty }: CartProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <CartButton isCartEmpty={isCartEmpty} />
      </DialogTrigger>
      <DialogContent className='right-[clamp(1.5rem,_7.5vw,_10rem)] top-32 w-[clamp(20rem,_50vw,_23.5rem)] gap-8 rounded-lg py-8 data-[state=closed]:slide-out-to-top-10 data-[state=open]:slide-in-from-top-10'>
        <CartHeader />
        <CartContent />
        <CartFooter />
      </DialogContent>
    </Dialog>
  );
}

export default Cart;
