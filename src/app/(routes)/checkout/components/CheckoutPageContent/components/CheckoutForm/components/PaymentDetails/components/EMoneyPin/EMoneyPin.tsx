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

type EMoneyPinProps = {
  form: {
    control: Control<CheckoutFormSchemaProps>;
  };
};

function EMoneyPin({ form }: EMoneyPinProps) {
  return (
    <FormField
      control={form.control}
      name='eMoneyPin'
      render={({ field }) => (
        <FormItem>
          <FormLabel>e-Money PIN</FormLabel>
          <FormControl>
            <Input placeholder='6891' type='tel' {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default EMoneyPin;
