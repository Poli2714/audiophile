import Link from 'next/link';

function SignInLink() {
  return (
    <Link className='w-full p-2' href='/auth/signin'>
      Sign in
    </Link>
  );
}

export default SignInLink;
