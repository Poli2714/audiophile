import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/buttons';
import ZX9SpeakerImage from '/public/images/home/image-speaker-zx9.png';

function FeaturedZX9Speaker() {
  return (
    <section className='group relative grid gap-[clamp(2.25rem,_10vw,_4rem)] overflow-hidden rounded-lg py-14 text-background xl:grid-cols-2 xl:gap-[clamp(6rem,_10vw,_9rem)] xl:pb-0 xl:pt-28'>
      <div className='absolute -z-10 h-full w-full bg-primary bg-[url("/images/home/pattern-circles.svg")] bg-cover bg-[center_top_-135px] bg-no-repeat bg-blend-normal transition-transform duration-500 group-hover:scale-150'></div>
      <div className='flex w-full justify-center xl:justify-end'>
        <div className='flex items-end xl:-mb-2'>
          <Image
            alt='ZX9 Speaker'
            className='h-auto w-[clamp(10.5rem,_26vw,_25rem)] transition-transform duration-500 group-hover:-translate-y-6 group-hover:scale-110'
            src={ZX9SpeakerImage}
          />
        </div>
      </div>

      <div className='flex w-full justify-center xl:justify-start xl:pb-14'>
        <div className='flex max-w-[clamp(19rem,_45.5vw,_21.875rem)] flex-col gap-[clamp(1.5rem,_5vw,_2rem)] text-center xl:text-left'>
          <div className='flex w-full flex-col items-center gap-6'>
            <h2 className='w-[80%] text-[clamp(2.25rem,_10vw,_3.5rem)] font-bold leading-[clamp(2.5rem,_10vw,_4rem)] tracking-wide md:w-full'>
              ZX9 SPEAKER
            </h2>
            <p className='text-[15px] leading-6'>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
          </div>
          <div className='flex w-full justify-center xl:justify-start'>
            <Button
              asChild
              className='bg-foreground tracking-wide hover:bg-btnHover'
            >
              <Link href='/product/zx9-speaker'>SEE PRODUCT</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedZX9Speaker;
