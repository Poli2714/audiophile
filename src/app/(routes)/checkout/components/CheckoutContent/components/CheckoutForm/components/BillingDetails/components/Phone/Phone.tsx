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

type PhoneProps = {
  form: {
    control: Control<CheckoutFormSchemaProps>;
  };
};

function Phone({ form }: PhoneProps) {
  return (
    <FormField
      control={form.control}
      name='phone'
      render={({ field }) => (
        <FormItem>
          <FormLabel>Phone number</FormLabel>
          <FormControl>
            <Input placeholder='+1 202-555-0136' type='tel' {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default Phone;
