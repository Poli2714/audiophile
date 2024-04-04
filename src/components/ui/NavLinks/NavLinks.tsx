import Link from 'next/link';

const productCategories = ['HOME', 'HEADPHONES', 'SPEAKERS', 'EARPHONES'];

function NavLinks() {
  return (
    <>
      {productCategories.map((category, i) => (
        <li key={i}>
          <Link
            className='text-sm font-semibold tracking-widest hover:text-primary/90'
            href={
              category === 'HOME' ? '/' : `/category/${category.toLowerCase()}`
            }
          >
            {category}
          </Link>
        </li>
      ))}
    </>
  );
}

export default NavLinks;
