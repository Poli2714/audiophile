'use client';

import { Button } from '@/components/buttons';
import { useStore } from '@/stores/store';

function DecrementButton() {
  const { decrement, qty } = useStore((state) => ({
    decrement: state.decrement,
    qty: state.qty,
  }));

  return (
    <Button
      className='hover:text-primary'
      onClick={qty > 1 ? decrement : undefined}
      size='icon'
      variant={null}
    >
      -
    </Button>
  );
}

export default DecrementButton;
