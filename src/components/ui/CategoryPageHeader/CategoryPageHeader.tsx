import { Navbar, Separator } from '..';

type CategoryPageHeaderTypes = {
  categoryName: string;
};

function CategoryPageHeader({ categoryName }: CategoryPageHeaderTypes) {
  return (
    <header className='bg-foreground'>
      <div className='px-[clamp(1.5rem,_7.5vw,_10rem)] xxl:container'>
        <Navbar />
      </div>
      <div className='xxl:container lg:px-[clamp(3.6rem,_7.5vw,_10rem)]'>
        <Separator className='bg-card/10' />
      </div>
      <div className='xxl:container'>
        <h1 className='py-[clamp(2rem,_8.5vw,_6.5rem)] text-center text-[clamp(1.75rem,_5.5vw,_2.5rem)] font-bold tracking-wider text-background'>
          {categoryName}
        </h1>
      </div>
    </header>
  );
}

export default CategoryPageHeader;
