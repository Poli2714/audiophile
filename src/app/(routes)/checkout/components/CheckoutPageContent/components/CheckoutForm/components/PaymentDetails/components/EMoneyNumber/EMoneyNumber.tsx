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

type EMoneyNumberProps = {
  form: {
    control: Control<CheckoutFormSchemaProps>;
  };
};

function EMoneyNumber({ form }: EMoneyNumberProps) {
  return (
    <FormField
      control={form.control}
      name='eMoneyNum'
      render={({ field }) => (
        <FormItem>
          <FormLabel>e-Money Number</FormLabel>
          <FormControl>
            <Input placeholder='238521993' type='tel' {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default EMoneyNumber;
