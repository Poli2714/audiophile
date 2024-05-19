import { Button } from '@/components/buttons';

type IconButtonProps = {
  children: React.ReactNode;
};

function IconButton({ children }: IconButtonProps) {
  return (
    <Button
      className='rounded-full hover:bg-accent'
      size='icon'
      variant='ghost'
    >
      {children}
    </Button>
  );
}

export default IconButton;
