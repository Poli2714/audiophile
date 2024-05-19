import { CategoryCardList, StoreInfo } from '@/components/ui';

type CategoryPageLayoutProps = {
  children: React.ReactNode;
};

function CategoryPageLayout({ children }: CategoryPageLayoutProps) {
  return (
    <>
      {children}
      <section className='mt-[7.5rem] flex flex-col gap-y-[7.5rem] px-[clamp(1.5rem,_6.4vw,_4rem)] xxl:container lg:mt-[clamp(7.5rem,_12vw,_10rem)] lg:gap-y-[clamp(7.5rem,_12vw,_10rem)] lg:px-[clamp(4.5rem,_9.3vw,_10.3125rem)]'>
        <CategoryCardList />
        <StoreInfo />
      </section>
    </>
  );
}

export default CategoryPageLayout;
