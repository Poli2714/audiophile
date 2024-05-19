import { CategoryCard } from './components';

const categories = ['headphones', 'speakers', 'earphones'];

function CategoryCardList() {
  return (
    <ul className='grid gap-16 md:grid-cols-3 md:gap-[clamp(0.625rem,_2.3vw,_2rem)]'>
      {categories.map((category, i) => (
        <li key={i} className='group min-w-40'>
          <CategoryCard category={category} />
        </li>
      ))}
    </ul>
  );
}

export default CategoryCardList;
