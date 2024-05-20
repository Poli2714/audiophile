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

type ZipCodeProps = {
  form: {
    control: Control<CheckoutFormSchemaProps>;
  };
};

function ZipCode({ form }: ZipCodeProps) {
  return (
    <FormField
      control={form.control}
      name='zip'
      render={({ field }) => (
        <FormItem>
          <FormLabel>ZIP Code</FormLabel>
          <FormControl>
            <Input placeholder='10001' {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default ZipCode;
