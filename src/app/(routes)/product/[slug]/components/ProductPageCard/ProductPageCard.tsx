import { ProductPageCardImage, ProductPageCardInfo } from './components';
import { ProductSlug } from '@/types/ProductProps';

function ProductPageCard({ slug }: ProductSlug) {
  return (
    <section className='grid gap-y-[clamp(2rem,_6.8vw,_3.25rem)] lg:grid-cols-[max-content_max-content] lg:place-items-center lg:justify-between lg:gap-y-0'>
      <ProductPageCardImage slug={slug} />
      <ProductPageCardInfo slug={slug} />
    </section>
  );
}

export default ProductPageCard;
