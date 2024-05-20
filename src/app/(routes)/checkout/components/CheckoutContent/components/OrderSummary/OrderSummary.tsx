import { Check } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/buttons';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/';
import { OrderSummaryContent } from './components';
import { revalidateCartTag } from '@/actions/cart';

function OrderSummary() {
  return (
    <Card className='max-w-[33.75rem] space-y-6 p-2 lg:space-y-12'>
      <CardHeader className='space-y-4 lg:space-y-6'>
        <div className='flex h-16 w-16 items-center justify-center rounded-full bg-primary'>
          <Check className='text-background' size={32} />
        </div>
        <CardTitle className='text-[clamp(1.5rem,_5vw,_2rem)] leading-8 tracking-wider md:w-[70%] lg:leading-9'>
          THANK YOU FOR YOUR ORDER
        </CardTitle>
        <CardDescription className='text-[15px] text-foreground/50'>
          You will receive an email confirmation shortly.
        </CardDescription>
      </CardHeader>
      <CardContent className='py-0 lg:grid lg:grid-cols-5'>
        <OrderSummaryContent />
      </CardContent>
      <CardFooter>
        <Button asChild className='w-full'>
          <Link onClick={async () => await revalidateCartTag()} href='/'>
            BACK TO HOME
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default OrderSummary;
