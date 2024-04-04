import { Button } from '@/components/buttons';
import { Navbar, Separator } from '../../components/ui';

function PageHero() {
  return (
    <header className='bg-[url("/images/home/mobile/image-header.jpg")] bg-cover bg-center bg-no-repeat md:bg-[url("/images/home/tablet/image-header.jpg")] xl:bg-[url("/images/home/desktop/image-header.jpg")] xl:bg-right'>
      <div className='flex h-[clamp(37.5rem,_99vw,_46rem)] flex-col px-[clamp(1.5rem,_7.5vw,_10rem)] xxl:container'>
        <Navbar />
        <Separator className='bg-card/10' />
        <div className='mt-24 flex flex-col items-center gap-6 text-center text-background md:max-w-sm md:self-center xl:max-w-96 xl:items-start xl:self-start xl:text-left'>
          <span className='text-sm tracking-[0.6rem] text-background/40'>
            NEW PRODUCT
          </span>
          <h1 className='text-[clamp(2.25rem,_5vw,_3.75rem)] font-bold leading-tight tracking-widest'>
            XX99 MARK II HEADPHONES
          </h1>
          <p className='max-w-[clamp(20rem,_60vw,_21.875rem)] text-[15px] leading-7'>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button className='mt-3 tracking-wider'>SEE PRODUCT</Button>
        </div>
      </div>
    </header>
  );
}

export default PageHero;
