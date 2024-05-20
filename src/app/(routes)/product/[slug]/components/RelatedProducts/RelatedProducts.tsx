import Link from 'next/link';

import { Button } from '@/components/buttons';
import { ProductSectionTitle } from '..';
import { ProductSlug } from '@/types/ProductProps';
import { getProduct } from '@/drizzle/schema/products/handler';

async function RelatedProducts({ slug }: ProductSlug) {
  const product = await getProduct(slug);

  return (
    <section className='mt-[7.5rem] flex flex-col gap-y-[clamp(2.5rem,_7.3vw,_4rem)] px-[clamp(1.5rem,_6.4vw,_4rem)] text-center xxl:container lg:mt-[clamp(7.5rem,_12vw,_10rem)] lg:px-[clamp(4.5rem,_9.3vw,_10.3125rem)]'>
      <ProductSectionTitle title='You may also like' />
      <ul className='grid gap-y-14 md:grid-cols-3 md:gap-[clamp(0.625rem,_2.3vw,_2rem)]'>
        {product?.relatedProducts.map((relatedProduct) => (
          <li
            key={relatedProduct.id}
            className='flex flex-col items-center gap-y-[clamp(2rem,_5.5vw,_2.5rem)]'
          >
            <picture>
              <source
                media='(min-width: 1024px)'
                srcSet={relatedProduct.desktop as string}
              />
              <source
                media='(min-width: 560px)'
                srcSet={relatedProduct.tablet as string}
              />
              <img
                alt={`${relatedProduct.name} picture`}
                className='h-full w-full rounded-lg object-cover object-center transition-transform duration-500 hover:scale-110'
                src={relatedProduct.mobile as string}
                height={120}
                width={327}
              />
            </picture>
            <h3 className='text-[clamp(1.25rem,_3.5vw,_1.5rem)] font-bold leading-none tracking-wide'>
              {relatedProduct.name.toUpperCase()}
            </h3>
            <Button>
              <Link href={`/product/${relatedProduct.slug}`}>SEE PRODUCT</Link>
            </Button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default RelatedProducts;
