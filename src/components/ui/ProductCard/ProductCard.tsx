import Link from 'next/link';

import { Button } from '@/components/buttons';
import { ProductByCategory } from '@/types/ProductByCategoryProps';

type ProductCardProps = {
  product: ProductByCategory;
  index: number;
};

async function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <section className='grid place-items-center gap-y-[clamp(2rem,_6.8vw,_3.25rem)] xl:grid-cols-2 xl:gap-0'>
      <div
        className={`h-[clamp(22rem,_45vw,_35rem)] w-full overflow-hidden ${index % 2 && 'xl:col-start-2'}`}
      >
        <picture>
          <source
            media='(min-width: 1024px)'
            srcSet={product.image?.catDesktop as string}
          />
          <source
            media='(min-width: 450px)'
            srcSet={product.image?.catTablet as string}
          />
          <source
            media='(min-width: 300px)'
            srcSet={product.image?.catMobile as string}
          />
          <img
            alt={`${product.name} picture`}
            className='h-full w-full object-cover object-center transition-transform duration-500 hover:scale-110'
            height={352}
            width={327}
          />
        </picture>
      </div>
      <div
        className={`flex max-w-[36rem] flex-col gap-[clamp(1.5rem,_4.2vw,_2rem)] text-center xl:max-w-none xl:justify-self-start xl:text-left ${index % 2 ? 'xl:row-start-1 xl:mr-[clamp(5.625rem,_8.7vw,_7.8125rem)]' : 'xl:ml-[clamp(5.625rem,_8.7vw,_7.8125rem)]'} xl:max-w-[28rem]`}
      >
        <div className='flex flex-col gap-6'>
          {product.new ? (
            <span className='tracking-[0.55rem] text-primary'>NEW PRODUCT</span>
          ) : null}
          <h1 className='text-[clamp(1.75rem,_5vw,_2.5rem)] font-bold leading-normal tracking-wide'>
            {product.name.toUpperCase()}
          </h1>
        </div>
        <p className='text-[15px] leading-6'>{product.description}</p>
        <Link href={`/product/${product.slug}`}>
          <Button className='tracking-wider'>SEE PRODUCT</Button>
        </Link>
      </div>
    </section>
  );
}

export default ProductCard;
