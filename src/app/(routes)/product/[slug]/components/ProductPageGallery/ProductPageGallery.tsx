import Image from 'next/image';

import { ProductSlug } from '@/types/ProductProps';
import { getProduct } from '@/drizzle/schema/products/handler';

async function ProductPageGallery({ slug }: ProductSlug) {
  const product = await getProduct(slug);

  if (
    !product?.image?.gallery1 &&
    !product?.image?.gallery2 &&
    !product?.image?.gallery3
  )
    return null;

  return (
    <ul className='grid grid-rows-[repeat(4,_max(13rem))] gap-5 lg:h-[clamp(23rem,_50vw,_37rem)] lg:grid-cols-5 lg:grid-rows-2 lg:gap-[clamp(1.25rem,_2.6vw,_2rem)]'>
      {[
        product.image.gallery1,
        product.image.gallery2,
        product.image.gallery3,
      ].map((galleryImg, i) => (
        <li
          key={i}
          className={`overflow-hidden rounded-lg lg:col-span-2 ${i === 1 ? 'lg:col-start-1' : i === 2 ? 'row-span-2 lg:col-span-3 lg:col-start-3 lg:row-start-1' : null}`}
        >
          <Image
            alt={`${product.name} picture`}
            className='h-full w-full object-cover object-center transition-transform duration-500 hover:scale-110'
            src={galleryImg as string}
            priority
            height={352}
            width={327}
          />
        </li>
      ))}
    </ul>
  );
}

export default ProductPageGallery;
