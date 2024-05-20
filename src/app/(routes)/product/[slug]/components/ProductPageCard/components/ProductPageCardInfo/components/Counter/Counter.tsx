'use client';

import { useStore } from '@/stores/store';
import { DecrementButton, IncrementButton } from './components';

function Counter() {
  const qty = useStore((state) => state.qty);

  return (
    <div className='flex items-center gap-x-4 bg-card'>
      <DecrementButton />
      <span className='font-bold'>{qty}</span>
      <IncrementButton />
    </div>
  );
}

export default Counter;
