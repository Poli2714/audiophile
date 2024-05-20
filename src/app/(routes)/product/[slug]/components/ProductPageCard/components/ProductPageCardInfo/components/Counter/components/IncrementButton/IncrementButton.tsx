'use client';

import { Button } from '@/components/buttons';
import { useStore } from '@/stores/store';

function IncrementButton() {
  const increment = useStore((state) => state.increment);

  return (
    <Button
      className='hover:text-primary'
      onClick={increment}
      size='icon'
      variant={null}
    >
      +
    </Button>
  );
}

export default IncrementButton;
