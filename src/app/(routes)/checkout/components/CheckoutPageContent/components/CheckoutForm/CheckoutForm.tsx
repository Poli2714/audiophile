'use client';

import { Loader2 } from 'lucide-react';
import { startTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  AlertDialog,
  AlertDialogContent,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/';
import {
  BillingDetails,
  CheckoutItemList,
  CheckoutTotalAmount,
  PaymentDetails,
  ShippingInfo,
} from './components';
import { Button } from '@/components/buttons';
import { Form } from '@/components/forms/';

import { addToOrderAction } from '@/actions/orders';
import {
  checkoutFormSchema,
  CheckoutFormSchemaProps,
} from '@/validations/CheckoutFormValidation';
import { useOptimisticCartContext } from '@/hooks/OptimisticCartProvider';
import { useOptimisticOrderItemContext } from '@/hooks/OptimisticOrderItemsProvider';

type CheckoutFormProps = {
  children: React.ReactNode;
};

function CheckoutForm({ children }: CheckoutFormProps) {
  const form = useForm<CheckoutFormSchemaProps>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
      zip: '',
      city: '',
      country: 'Canada',
      payment: 'cash',
      eMoneyNum: '',
      eMoneyPin: '',
    },
  });
  const { optimisticCart } = useOptimisticCartContext();
  const { setOptimisticOrderItems } = useOptimisticOrderItemContext();

  const onSubmit = async (data: CheckoutFormSchemaProps) => {
    startTransition(() =>
      setOptimisticOrderItems({
        action: 'ADDTOORDER',
        newOrderItems: optimisticCart.map((optimisticCartItem) => ({
          id: optimisticCartItem.id,
          quantity: optimisticCartItem.quantity,
          product: {
            ...optimisticCartItem.product,
          },
        })),
      })
    );
    const response = await addToOrderAction(data);
    if (response?.error) {
      throw new Error('Failed to complete the order');
    }
    form.reset();
  };

  return (
    <>
      <Form {...form}>
        <form
          className=' flex flex-col space-y-8 xl:flex-row xl:space-x-8 xl:space-y-0'
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <Card className='flex-1 space-y-8'>
            <CardHeader>
              <CardTitle className='text-[clamp(1.75rem,_5vw,_2rem)] tracking-wider'>
                CHECKOUT
              </CardTitle>
            </CardHeader>
            <CardContent className='space-y-[clamp(2rem,_7vw,_4rem)]'>
              <BillingDetails form={form} />
              <ShippingInfo form={form} />
              <PaymentDetails form={form} />
            </CardContent>
          </Card>
          <Card className='space-y-8 xl:w-[clamp(18.75rem,_25vw,_21.875rem)] xl:self-start'>
            <CardHeader>
              <CardTitle>SUMMARY</CardTitle>
            </CardHeader>
            <CardContent className='space-y-8'>
              <CheckoutItemList />
              <CheckoutTotalAmount />
            </CardContent>
            <CardFooter>
              <Button
                className='w-full font-semibold tracking-widest'
                disabled={form.formState.isSubmitting}
                type='submit'
              >
                {form.formState.isSubmitting ? (
                  <Loader2 className='mr-2 animate-spin' />
                ) : null}
                CONTINUE & PAY
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
      <AlertDialog open={form.formState.isSubmitSuccessful}>
        <AlertDialogContent className='border-none p-0'>
          {children}
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default CheckoutForm;
