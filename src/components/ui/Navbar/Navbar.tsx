import { BrandLogo, Cart, NavLinks, NavMenu } from '..';

function Navbar() {
  return (
    <nav className='flex items-center justify-between gap-6 py-8 text-background xxl:container md:justify-normal lg:justify-between md:[&>:last-child]:ml-auto lg:[&>:last-child]:ml-0'>
      <NavMenu />
      <BrandLogo />
      <ul className='hidden lg:flex lg:gap-9'>
        <NavLinks />
      </ul>
      <Cart />
    </nav>
  );
}

export default Navbar;
