import Image from 'next/image';
import Link from 'next/link';
import { ChevronRightIcon } from 'lucide-react';

import EarphoneImage from '/public/images/shared/image-category-thumbnail-earphones.png';
import HeadphoneImage from '/public/images/shared/image-category-thumbnail-headphones.png';
import SpeakerImage from '/public/images/shared/image-category-thumbnail-speakers.png';

type CategoryCardProps = {
  category: string;
};

function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/category/${category}`}>
      <div className='relative flex flex-col items-center rounded-lg bg-card pb-5 pt-24 lg:h-[clamp(10.5625rem,_20vw,_12.75rem)]'>
        <div className='absolute -top-[clamp(3.125rem,_6vw,_3.75rem)]'>
          <Image
            alt={`${category[0].toUpperCase()}${category.slice(1, -1)} image`}
            className='h-[clamp(9.375rem,_20vw,_11rem)] w-auto transition-transform duration-500 group-hover:-translate-y-3'
            height={150}
            width={155}
            src={
              category === 'headphones'
                ? HeadphoneImage
                : category === 'speakers'
                  ? SpeakerImage
                  : EarphoneImage
            }
          />
        </div>
        <div className='flex flex-col items-center gap-3'>
          <h6 className='font-semibold tracking-wider xl:text-[clamp(1rem,_1.5vw,_1.125rem)]'>
            {category.toUpperCase()}
          </h6>
          <div className='flex items-center gap-1'>
            <span className='text-secondary-foreground text-xs font-bold tracking-wider group-hover:text-primary xl:text-[clamp(0.75rem,_1.17vw,_0.875rem)]'>
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
  );
}

export default CategoryCard;
