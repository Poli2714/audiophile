import { notFound } from 'next/navigation';

import {
  ProductAccessories,
  ProductFeatures,
  ProductPageCard,
  ProductPageGallery,
  RelatedProducts,
} from './components';
import { getProduct } from '@/drizzle/schema/products/handler';
import { ProductSlug } from '@/types/ProductProps';

type ProductPageProps = {
  params: ProductSlug;
};

async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.slug);

  if (!product) return notFound();

  return (
    <>
      <main className='grid gap-[clamp(5.5rem,_12.5vw,_10rem)] px-[clamp(1.5rem,_6.4vw,_4rem)] xxl:container lg:px-[clamp(4.5rem,_9.3vw,_10.3125rem)]'>
        <ProductPageCard slug={product.slug} />
        <div className='grid gap-[clamp(5.5rem,_12.5vw,_7.5rem)] xl:grid-cols-[minmax(auto,_40rem)_minmax(auto,_22rem)] xl:justify-between xl:gap-32'>
          <ProductFeatures slug={product.slug} />
          <ProductAccessories slug={product.slug} />
        </div>
        <ProductPageGallery slug={product.slug} />
      </main>
      <RelatedProducts slug={product.slug} />
    </>
  );
}

export default ProductPage;
