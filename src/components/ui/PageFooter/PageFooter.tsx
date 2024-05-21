import Image from 'next/image';
import Link from 'next/link';

import { BrandLogo, NavLinks } from '..';
import InstagramIcon from '/public/images/shared/icon-instagram.svg';
import FacebookIcon from '/public/images/shared/icon-facebook.svg';
import XIcon from '/public/images/shared/icon-x.svg';

const socialMediaPlatforms = [
  {
    alt: 'Facebook icon',
    href: 'https://www.facebook.com',
    src: FacebookIcon,
  },
  {
    alt: 'Instagram icon',
    href: 'https://www.instagram.com',
    src: InstagramIcon,
  },
  {
    alt: 'X icon',
    href: 'https://www.x.com',
    src: XIcon,
  },
];

function PageFooter() {
  return (
    <footer className='mt-[10.5rem] bg-foreground'>
      <div className='grid grid-cols-[1fr_max-content] place-items-center gap-y-12 bg-foreground px-[clamp(1.5rem,_6.4vw,_4rem)] py-12 text-center text-background xxl:container lg:place-items-start lg:px-[clamp(4.5rem,_9.3vw,_10.3125rem)] lg:text-left'>
        <div className='col-span-2 special:col-span-1'>
          <BrandLogo />
        </div>
        <ul className='col-span-2 flex flex-col gap-y-4 lg:flex-row lg:gap-x-9 lg:gap-y-0 special:col-span-1'>
          <NavLinks />
        </ul>
        <p className='col-span-2 px-[clamp(1.5rem,_6.3vw,_3rem)] text-[15px] leading-[25px] lg:px-0 special:col-span-1 special:max-w-[33.75rem]'>
          Audiophile is an all in one stop to fulfill your audio needs.
          We&rsquo;re a small team of music lovers and sound specialists who are
          devoted to helping you get the most out of personal audio. Come and
          visit our demo facility - we&rsquo;re open 7 days a week.
        </p>
        <span className='col-span-2 text-[15px] leading-[25px] lg:col-span-1 special:col-start-1'>
          Copyright 2024. All Rights Reserved
        </span>
        <ul className='col-span-2 flex gap-x-4 lg:col-span-1 lg:place-self-end special:col-start-2 special:row-start-2'>
          {socialMediaPlatforms.map((socialMedia, i) => (
            <Link key={i} href={socialMedia.href} target='_blank'>
              <Image
                alt={socialMedia.alt}
                className='transition-transform duration-500 hover:scale-110'
                src={socialMedia.src}
                width={24}
              />
            </Link>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default PageFooter;
