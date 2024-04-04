import Image from 'next/image';
import Link from 'next/link';
import { ChevronRightIcon } from 'lucide-react';

import EarphoneImage from '/public/images/shared/image-category-thumbnail-earphones.png';
import HeadphoneImage from '/public/images/shared/image-category-thumbnail-headphones.png';
import SpeakerImage from '/public/images/shared/image-category-thumbnail-speakers.png';

const categories = ['HEADPHONES', 'SPEAKERS', 'EARPHONES'];

function ProductCategories() {
  return (
    <ul className='grid gap-16 md:grid-cols-3 md:gap-[clamp(0.625rem,_2.3vw,_2rem)]'>
      {categories.map((category, i) => (
        <li key={i} className='group min-w-40'>
          <Link href={`/category/${category.toLowerCase()}`}>
            <div className='relative flex flex-col items-center rounded-lg bg-card pb-5 pt-24 lg:h-[clamp(10.5625rem,_20vw,_12.75rem)]'>
              <div className='absolute -top-[clamp(3.125rem,_6vw,_3.75rem)]'>
                <Image
                  alt={`${category[0]}${category.slice(1, -1).toLowerCase()} image`}
                  className='h-[clamp(9.375rem,_20vw,_11rem)] w-auto transition-transform duration-500 group-hover:-translate-y-3'
                  height={150}
                  src={
                    i === 0
                      ? HeadphoneImage
                      : i === 1
                        ? SpeakerImage
                        : EarphoneImage
                  }
                />
              </div>
              <div className='flex flex-col items-center gap-3'>
                <h6 className='font-semibold tracking-wider xl:text-[clamp(1rem,_1.5vw,_1.125rem)]'>
                  {category}
                </h6>
                <div className='flex items-center gap-1'>
                  <span className='text-xs font-bold tracking-wider text-secondary group-hover:text-secondary-hover xl:text-[clamp(0.75rem,_1.17vw,_0.875rem)]'>
                    SHOP
                  </span>
                  <ChevronRightIcon
                    size={17}
                    className='text-primary transition-transform duration-500 group-hover:translate-x-1 xl:h-auto xl:w-5'
                  />
                </div>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default ProductCategories;
