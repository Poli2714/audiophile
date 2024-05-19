'use client';

import Link from 'next/link';

import { Button } from '@/components/buttons';
import { DialogClose, DialogFooter } from '@/components/ui';

import { useStore } from '@/stores/store';

function CartFooter() {
  const isPending = useStore((state) => state.isPending);

  return (
    <DialogFooter>
      <DialogClose asChild>
        <Button
          asChild
          className={`mt-3 w-full ${isPending && 'pointer-events-none opacity-50'}`}
        >
          <Link href={`${isPending ? '#' : '/checkout'}`}>GO TO CHECKOUT</Link>
        </Button>
      </DialogClose>
    </DialogFooter>
  );
}

export default CartFooter;
