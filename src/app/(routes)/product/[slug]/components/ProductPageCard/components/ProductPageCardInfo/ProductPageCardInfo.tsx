import { AddToCartButton, Counter } from './components';
import { getProduct } from '@/drizzle/schema/products/handler';
import { ProductSlug } from '@/types/ProductProps';

async function ProductPageCardInfo({ slug }: ProductSlug) {
  const product = await getProduct(slug);

  return (
    <div className='flex flex-col gap-[clamp(1.5rem,_4.2vw,_2rem)] lg:w-[clamp(19rem,_40vw,_28rem)]'>
      <div className='flex flex-col gap-6'>
        {product?.new ? (
          <span className='tracking-[0.55rem] text-primary'>NEW PRODUCT</span>
        ) : null}
        <h1 className='text-[clamp(1.75rem,_5vw,_2.5rem)] font-bold leading-normal tracking-wide'>
          {product?.name.toUpperCase()}
        </h1>
      </div>
      <p className='text-[15px] leading-6'>{product?.description}</p>
      <span className='text-lg font-bold tracking-wider'>
        $ {product?.price.toLocaleString()}
      </span>
      <div className='flex gap-4'>
        <Counter />
        <AddToCartButton productId={product?.id as string} />
      </div>
    </div>
  );
}

export default ProductPageCardInfo;
