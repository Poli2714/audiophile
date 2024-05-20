import { Control } from 'react-hook-form';

import { Address, City, Country, ZipCode } from './components';
import { Fieldset } from '@/components/forms';

import { CheckoutFormSchemaProps } from '@/validations/CheckoutFormValidation';

type ShippingInfoProps = {
  form: {
    control: Control<CheckoutFormSchemaProps>;
  };
};

function ShippingInfo({ form }: ShippingInfoProps) {
  return (
    <Fieldset legend='Shipping info'>
      <Address form={form} />
      <ZipCode form={form} />
      <City form={form} />
      <Country form={form} />
    </Fieldset>
  );
}

export default ShippingInfo;
