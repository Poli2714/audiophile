import Image from 'next/image';
import Link from 'next/link';

import CompanyLogo from '/public/images/shared/logo.svg';

function BrandLogo() {
  return (
    <Link href='/'>
      <Image alt='Brand logo' priority src={CompanyLogo} />
    </Link>
  );
}

export default BrandLogo;
