import Link from 'next/link';

import { Button } from '@/components/buttons';

function FeaturedYX1Earphones() {
  return (
    <section className='grid grid-rows-2 gap-y-6 lg:grid-cols-2 lg:grid-rows-1 lg:gap-x-[clamp(0.75rem,_2.1vw,_1.875rem)] lg:gap-y-0'>
      <div className='overflow-hidden rounded-lg'>
        <div className='h-[clamp(12.5rem,_45vw,_20rem)] bg-[url("/images/home/mobile/image-earphones-yx1.jpg")] bg-cover transition-transform duration-500 hover:scale-110 lg:bg-[url("/images/home/tablet/image-earphones-yx1.jpg")] xl:bg-[url("/images/home/desktop/image-earphones-yx1.jpg")]'></div>
      </div>
      <div className='flex h-[clamp(12.5rem,_45vw,_20rem)] flex-col items-start justify-center gap-8 rounded-lg bg-card pl-[clamp(1.5rem,_6.4vw,_6rem)]'>
        <h2 className='text-3xl font-semibold tracking-wide'>YX1 EARPHONES</h2>
        <Button
          asChild
          className='border-2 border-foreground bg-inherit font-semibold tracking-wide text-foreground hover:bg-foreground hover:text-background'
        >
          <Link href='/product/yx1-earphones'>SEE PRODUCT</Link>
        </Button>
      </div>
    </section>
  );
}

export default FeaturedYX1Earphones;
