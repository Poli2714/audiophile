import { MenuIcon } from 'lucide-react';

import { Dialog, DialogContent, DialogTrigger, ProductCategories } from '..';
import { IconButton } from '@/components/buttons';

function NavMenu() {
  return (
    <div className='lg:hidden'>
      <Dialog>
        <DialogTrigger asChild>
          <IconButton>
            <MenuIcon />
          </IconButton>
        </DialogTrigger>
        <DialogContent className='top-[6.5rem] rounded-b-lg px-6 pt-16'>
          <ProductCategories />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default NavMenu;
