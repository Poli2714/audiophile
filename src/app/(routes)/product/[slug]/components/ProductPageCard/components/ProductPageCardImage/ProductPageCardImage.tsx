import { getProduct } from '@/drizzle/schema/products/handler';
import { ProductSlug } from '@/types/ProductProps';

async function ProductPageCardImage({ slug }: ProductSlug) {
  const product = await getProduct(slug);

  return (
    <div className='h-[clamp(20.4375rem,_70vw,_22rem)] w-full overflow-hidden rounded-lg md:h-[clamp(22rem,_62vw,_35rem)] lg:w-[clamp(17.5rem,_36vw,_23rem)] xl:w-[clamp(23rem,_37.5vw,_33.75rem)]'>
      <picture>
        <source
          media='(min-width: 1300px)'
          srcSet={product?.image?.desktop as string}
        />
        <source
          media='(min-width: 768px)'
          srcSet={product?.image?.tablet as string}
        />
        <img
          alt={`${product?.name} picture`}
          className='h-full w-full object-cover object-center transition-transform duration-500 hover:scale-110'
          src={product?.image?.mobile as string}
          height={327}
          width={327}
        />
      </picture>
    </div>
  );
}

export default ProductPageCardImage;
