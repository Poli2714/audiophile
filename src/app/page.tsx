import { CategoryCardList, PageFooter, StoreInfo } from '@/components/ui';
import { FeaturedProducts, PageHeader } from './components';

export default function Home() {
  return (
    <>
      <PageHeader />
      <main className='mt-32 grid gap-[clamp(6rem,_12.5vw,_10.5rem)] px-[clamp(1.5rem,_7.5vw,_10rem)] xxl:container'>
        <CategoryCardList />
        <FeaturedProducts />
        <StoreInfo />
      </main>
      <PageFooter />
    </>
  );
}
