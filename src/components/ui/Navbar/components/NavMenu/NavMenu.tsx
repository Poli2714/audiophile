import { MenuIcon } from 'lucide-react';

import {
  CategoryCardList,
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui';
import { Button } from '@/components/buttons';

function NavMenu() {
  return (
    <div className='lg:hidden'>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className='rounded-full hover:bg-accent'
            size='icon'
            variant='ghost'
          >
            <MenuIcon size={20} />
          </Button>
        </DialogTrigger>
        <DialogContent className='top-[6.5rem] rounded-b-lg px-6 pt-16'>
          <CategoryCardList />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default NavMenu;
