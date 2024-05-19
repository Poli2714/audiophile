import { Button } from '@/components/buttons';

function FeaturedZX7Speaker() {
  return (
    <section className='group relative h-80 overflow-hidden rounded-lg'>
      <div className='h-full w-full bg-[url("/images/home/mobile/image-speaker-zx7.jpg")] bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110 md:bg-[url("/images/home/tablet/image-speaker-zx7.jpg")] xl:bg-[url("/images/home/desktop/image-speaker-zx7.jpg")]'></div>
      <div className='absolute left-[clamp(1.5rem,_6.4vw,_6rem)] top-[calc(10rem-3.125rem)] flex flex-col items-start justify-center gap-8'>
        <h2 className='text-3xl font-semibold tracking-wide'>ZX7 SPEAKER</h2>
        <Button className='border-2 border-foreground bg-inherit font-semibold tracking-wide text-foreground hover:bg-foreground hover:text-background'>
          SEE PRODUCT
        </Button>
      </div>
    </section>
  );
}

export default FeaturedZX7Speaker;
