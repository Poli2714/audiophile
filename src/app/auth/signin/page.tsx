import { ArrowLeftIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import { Button, IconButton } from '@/components/buttons';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { auth } from '@/auth';
import CompanyLogo from '/public/images/shared/logo.svg';
import GoogleIcon from '/public/images/shared/icon-google.svg';
import { signInWithGoogle } from '@/actions/signIn';

async function SignIn() {
  const session = await auth();

  if (session?.user) redirect('/');

  return (
    <div className='flex h-screen items-center justify-center'>
      <Card className='flex w-96 flex-col items-center space-y-8 bg-[#333]'>
        <CardHeader className='w-full items-center gap-y-1'>
          <div className='mb-12 flex w-full flex-col items-center [&>:first-child]:mr-auto'>
            <IconButton>
              <Link href='/'>
                <ArrowLeftIcon color='white' />
              </Link>
            </IconButton>
            <Image alt='Brand logo' priority src={CompanyLogo} />
          </div>
          <CardTitle className='flex flex-col gap-y-4 text-lg text-background'>
            Connect with your favorite brand
          </CardTitle>
          <CardDescription>Log in</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={signInWithGoogle} className='mb-10'>
            <Button variant='secondary' type='submit'>
              <div className='flex items-center gap-3'>
                <Image alt='Google logo' className='h-6 w-6' src={GoogleIcon} />
                <div>Sign in with Google</div>
              </div>
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default SignIn;
