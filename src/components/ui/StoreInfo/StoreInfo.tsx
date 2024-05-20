import AudioGearImg from '/public/images/shared/image-best-gear.jpg';

import Image from 'next/image';

function StoreInfo() {
  return (
    <section className='grid gap-y-10 xxl:grid-cols-[auto_max-content] xxl:gap-y-0'>
      <div className='relative h-[18.75rem] overflow-hidden xxl:col-start-2 xxl:h-[36.75rem] xxl:w-[33.75rem]'>
        <Image
          alt='A man listening to a music using headphones'
          className='object-cover transition-transform duration-500 hover:scale-110'
          src={AudioGearImg}
          fill
          sizes='33vw'
        />
      </div>
      <div className='flex max-w-xl flex-col gap-y-8 place-self-center text-center xxl:col-start-1 xxl:row-start-1 xxl:max-w-md xxl:justify-self-start xxl:text-left'>
        <h2 className='text-[clamp(1.75rem,_5.5vw,_2.5rem)] font-bold leading-[clamp(2.25rem,_7.5vw,_2.75rem)] tracking-wide'>
          BRINGING YOU THE <span className='text-primary'>BEST</span> AUDIO GEAR
        </h2>
        <p className='text-[15px] leading-[25px]'>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  );
}

export default StoreInfo;
