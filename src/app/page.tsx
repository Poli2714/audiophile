import { CategoryCardList, PageFooter, StoreInfo } from '@/components/ui';
import { FeaturedProducts, PageHeader } from './components';

export default function Home() {
  return (
    <>
      <PageHeader />
      <main className='mt-32 grid gap-[clamp(6rem,_12.5vw,_10.5rem)] px-[clamp(1.5rem,_6.4vw,_4rem)] xxl:container lg:px-[clamp(4.5rem,_9.3vw,_10.3125rem)]'>
        <CategoryCardList />
        <FeaturedProducts />
        <StoreInfo />
      </main>
      <PageFooter />
    </>
  );
}
