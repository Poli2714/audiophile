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

type CityProps = {
  form: {
    control: Control<CheckoutFormSchemaProps>;
  };
};

function City({ form }: CityProps) {
  return (
    <FormField
      control={form.control}
      name='city'
      render={({ field }) => (
        <FormItem>
          <FormLabel>City</FormLabel>
          <FormControl>
            <Input placeholder='Vancouver' {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default City;
