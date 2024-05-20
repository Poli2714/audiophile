import { Control } from 'react-hook-form';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/forms/';

import { CheckoutFormSchemaProps } from '@/validations/CheckoutFormValidation';

type CountryProps = {
  form: {
    control: Control<CheckoutFormSchemaProps>;
  };
};

function Country({ form }: CountryProps) {
  return (
    <FormField
      control={form.control}
      name='country'
      render={({ field }) => (
        <FormItem>
          <FormLabel>Country</FormLabel>
          <Select
            onValueChange={field.onChange}
            value={field.value}
            defaultValue='Canada'
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value='Canada'>Canada</SelectItem>
              <SelectItem value='United States'>United States</SelectItem>
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default Country;
