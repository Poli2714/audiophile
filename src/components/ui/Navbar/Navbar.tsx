import { BrandLogo, NavLinks } from '@/components/ui';
import { Cart, NavMenu, Profile } from './components';

type NavbarProps = {
  isUserSignedIn: boolean;
  userName: string | undefined | null;
};

function Navbar({ isUserSignedIn, userName }: NavbarProps) {
  return (
    <nav className='flex items-center justify-between gap-6 py-8 text-background xxl:container md:justify-normal lg:justify-between md:[&>:last-child]:ml-auto lg:[&>:last-child]:ml-0'>
      <NavMenu />
      <BrandLogo />
      <ul className='hidden lg:flex lg:gap-9'>
        <NavLinks />
      </ul>
      <div className='flex gap-x-1'>
        <Cart />
        <Profile isUserSignedIn={isUserSignedIn} userName={userName} />
      </div>
    </nav>
  );
}

export default Navbar;
