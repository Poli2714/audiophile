import Link from 'next/link';

import { Button } from '@/components/buttons';

function PageHero() {
  return (
    <div className='mt-24 flex flex-col items-center gap-6 text-center text-background md:max-w-sm md:self-center xl:max-w-96 xl:items-start xl:self-start xl:text-left'>
      <span className='text-sm tracking-[0.6rem] text-background/40'>
        NEW PRODUCT
      </span>
      <h1 className='text-[clamp(2.25rem,_5vw,_3.75rem)] font-bold leading-tight tracking-widest'>
        XX99 MARK II HEADPHONES
      </h1>
      <p className='max-w-[clamp(20rem,_60vw,_21.875rem)] text-[15px] leading-6'>
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
      <Button asChild>
        <Link href='/product/xx99-mark-two-headphones'>SEE PRODUCT</Link>
      </Button>
    </div>
  );
}

export default PageHero;
