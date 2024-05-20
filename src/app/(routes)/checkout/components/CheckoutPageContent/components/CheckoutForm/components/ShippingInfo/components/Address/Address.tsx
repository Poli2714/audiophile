import { Control } from 'react-hook-form';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@/components/forms/';

import { CheckoutFormSchemaProps } from '@/validations/CheckoutFormValidation';

type AddressProps = {
  form: {
    control: Control<CheckoutFormSchemaProps>;
  };
};

function Address({ form }: AddressProps) {
  return (
    <FormField
      control={form.control}
      name='address'
      render={({ field }) => (
        <FormItem className='lg:col-span-2'>
          <FormLabel>Your Address</FormLabel>
          <FormControl>
            <Input placeholder='1137 Williams Avenue' {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default Address;
