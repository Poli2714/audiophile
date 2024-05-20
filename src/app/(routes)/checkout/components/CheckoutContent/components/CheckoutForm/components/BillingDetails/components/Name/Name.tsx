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

type NameProps = {
  form: {
    control: Control<CheckoutFormSchemaProps>;
  };
};

function Name({ form }: NameProps) {
  return (
    <FormField
      control={form.control}
      name='name'
      render={({ field }) => (
        <FormItem>
          <FormLabel>Name</FormLabel>
          <FormControl>
            <Input autoFocus placeholder='Alexei Ward' {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default Name;
