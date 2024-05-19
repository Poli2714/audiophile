'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavItemProps = {
  label: string;
};

function NavItem({ label }: NavItemProps) {
  const path = usePathname();

  return (
    <Link
      className={`text-sm font-semibold tracking-widest hover:text-primary ${(path === '/' && label === 'home') || path === `/category/${label}` ? 'text-primary' : null}`}
      href={label === 'home' ? '/' : `/category/${label}`}
    >
      {label.toUpperCase()}
    </Link>
  );
}

export default NavItem;
