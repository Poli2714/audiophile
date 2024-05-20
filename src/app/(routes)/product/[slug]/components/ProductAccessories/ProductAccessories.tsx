import { ProductSectionTitle } from '..';
import { getProduct } from '@/drizzle/schema/products/handler';
import { ProductSlug } from '@/types/ProductProps';

async function ProductAccessories({ slug }: ProductSlug) {
  const product = await getProduct(slug);

  return (
    <section className='grid gap-[clamp(1.5rem,_4.5vw,_2rem)] lg:grid-cols-2 xl:grid-cols-1 xl:place-content-start'>
      <ProductSectionTitle title='In the box' />
      {product?.accessories !== undefined ? (
        <ul className='flex flex-col gap-2'>
          {product.accessories.map((accessory) => (
            <li key={accessory.id} className='flex'>
              <span className='w-10 font-bold text-primary'>
                {accessory.quantity}x
              </span>
              <span className='text-[15px] leading-6'>{accessory.name}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className='text-[15px] leading-6'>
          Product doesn&lsquo;t have additional accessories
        </p>
      )}
    </section>
  );
}

export default ProductAccessories;
