import { ProductSectionTitle } from '..';
import { getProduct } from '@/drizzle/schema/products/handler';
import { ProductSlug } from '@/types/ProductProps';

async function ProductFeatures({ slug }: ProductSlug) {
  const product = await getProduct(slug);

  return (
    <section className='grid gap-[clamp(1.5rem,_4.5vw,_2rem)]'>
      <ProductSectionTitle title='features' />
      <ul className='flex flex-col gap-y-6'>
        {product?.features.map((feature) => (
          <li key={feature.id}>
            <p className='text-[15px] leading-6'>{feature.feature}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProductFeatures;
