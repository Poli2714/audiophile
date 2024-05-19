import { Button } from '@/components/buttons';
import { logOut } from '@/actions/signOut';

function SignOutButton() {
  return (
    <form className='h-full w-full' action={logOut}>
      <Button
        className='h-full w-full justify-start p-2 font-semibold transition-none'
        type='submit'
        variant={null}
      >
        Sign out
      </Button>
    </form>
  );
}

export default SignOutButton;
