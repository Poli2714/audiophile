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

type EmailProps = {
  form: {
    control: Control<CheckoutFormSchemaProps>;
  };
};

function Email({ form }: EmailProps) {
  return (
    <FormField
      control={form.control}
      name='email'
      render={({ field }) => (
        <FormItem>
          <FormLabel>Email Adress</FormLabel>
          <FormControl>
            <Input placeholder='alexei@mail.com' {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default Email;
