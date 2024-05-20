import { Control } from 'react-hook-form';

import { CashOnDelivery, EMoneyNumber, EMoneyPin } from './components';
import {
  Fieldset,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  RadioGroup,
  RadioGroupItem,
} from '@/components/forms/';

import { CheckoutFormSchemaProps } from '@/validations/CheckoutFormValidation';

type PaymentDetailsProps = {
  form: {
    control: Control<CheckoutFormSchemaProps>;
  };
};

function PaymentDetails({ form }: PaymentDetailsProps) {
  return (
    <Fieldset legend='Payment details'>
      <FormField
        control={form.control}
        name='payment'
        render={({ field }) => (
          <>
            <FormItem className='lg:col-span-2 lg:grid lg:grid-cols-2'>
              <FormLabel>Payment Method</FormLabel>
              <FormControl>
                <RadioGroup
                  className='space-y-1'
                  defaultValue='cash'
                  onValueChange={field.onChange}
                >
                  <FormItem className='flexitems-center space-x-4 space-y-0 rounded-lg border p-[1.125rem]'>
                    <FormControl>
                      <RadioGroupItem value='eMoney' />
                    </FormControl>
                    <FormLabel className='text-sm'>e-Money</FormLabel>
                  </FormItem>
                  <FormItem className='flex items-center space-x-4 space-y-0 rounded-lg border p-[1.125rem]'>
                    <FormControl>
                      <RadioGroupItem value='cash' />
                    </FormControl>
                    <FormLabel className='text-sm'>Cash on Delivery</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
            {field.value === 'eMoney' ? (
              <>
                <EMoneyNumber form={form} />
                <EMoneyPin form={form} />
              </>
            ) : field.value === 'cash' ? (
              <CashOnDelivery />
            ) : null}
          </>
        )}
      />
    </Fieldset>
  );
}

export default PaymentDetails;
