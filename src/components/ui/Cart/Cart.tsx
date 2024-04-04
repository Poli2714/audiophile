import Link from 'next/link';

import { Button, IconButton } from '@/components/buttons';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '..';
import { ShoppingCartIcon } from 'lucide-react';

function Cart() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <IconButton>
          <ShoppingCartIcon />
        </IconButton>
      </DialogTrigger>
      <DialogContent className='right-[clamp(1.5rem,_7.5vw,_10rem)] top-32 w-80 gap-8 rounded-lg py-8 data-[state=closed]:slide-out-to-top-10 data-[state=open]:slide-in-from-top-10'>
        <DialogHeader className='flex flex-row items-center space-y-0'>
          <DialogTitle className='text-lg tracking-wide'>CART (0)</DialogTitle>
          <Button
            className='ml-auto p-0 text-secondary underline hover:text-secondary-hover'
            disabled
            variant='link'
          >
            Remove all
          </Button>
        </DialogHeader>
        <div className='text-center text-secondary'>Your cart is empty.</div>
        <DialogFooter>
          <DialogClose asChild>
            <Button className='w-full tracking-wide'>
              <Link href='/checkout'>GO TO CHECKOUT</Link>
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default Cart;
