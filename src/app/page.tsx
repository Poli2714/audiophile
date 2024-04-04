import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import PageHero from './PageHero/PageHero';
import { ProductCategories, StoreInfo } from '@/components/ui';

export default function Home() {
  return (
    <>
      <PageHero />
      <main className='mt-32 grid gap-[clamp(6rem,_12.5vw,_10.5rem)] px-[clamp(1.5rem,_7.5vw,_10rem)] xxl:container'>
        <ProductCategories />
        <FeaturedProducts />
        <StoreInfo />
      </main>
    </>
  );
}
