import { notFound } from 'next/navigation';

import { CategoryPageTitle } from './components';
import { ProductCard } from '@/components/ui';
import { getProductsByCategory } from '@/drizzle/schema/products/handler';

type CategoryProps = {
  params: {
    slug: string;
  };
};

async function Category({ params }: CategoryProps) {
  const products = await getProductsByCategory(params.slug);

  if (products.length === 0) return notFound();

  return (
    <>
      <CategoryPageTitle categoryName={params.slug} />
      <main className='mt-16 grid gap-[clamp(5.5rem,_12.5vw,_10rem)] px-[clamp(1.5rem,_6.4vw,_4rem)] xxl:container lg:px-[clamp(4.5rem,_9.3vw,_10.3125rem)]'>
        <ul className='grid gap-[clamp(6rem,_12.5vw,_10.5rem)]'>
          {products.map((product, index) => (
            <li key={product.id}>
              <ProductCard product={product} index={index} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default Category;
