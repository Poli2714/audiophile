import { Separator } from '@/components/ui';

type CategoryPageTitleTypes = {
  categoryName: string;
};

function CategoryPageTitle({ categoryName }: CategoryPageTitleTypes) {
  return (
    <div className='bg-foreground'>
      <div className='xxl:container lg:px-[clamp(3.6rem,_7.5vw,_10rem)]'>
        <Separator className='bg-card/10' />
      </div>
      <div className='xxl:container'>
        <h1 className='py-[clamp(2rem,_8.5vw,_6.5rem)] text-center text-[clamp(1.75rem,_5.5vw,_2.5rem)] font-bold tracking-wider text-background'>
          {categoryName.toUpperCase()}
        </h1>
      </div>
    </div>
  );
}

export default CategoryPageTitle;
