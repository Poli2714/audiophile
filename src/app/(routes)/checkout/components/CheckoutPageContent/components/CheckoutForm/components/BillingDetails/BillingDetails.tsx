import { Control } from 'react-hook-form';

import { Email, Name, Phone } from './components';
import { Fieldset } from '@/components/forms';

import { CheckoutFormSchemaProps } from '@/validations/CheckoutFormValidation';

type BillingDetailsProps = {
  form: {
    control: Control<CheckoutFormSchemaProps>;
  };
};

function BillingDetails({ form }: BillingDetailsProps) {
  return (
    <Fieldset legend='Billing details'>
      <Name form={form} />
      <Email form={form} />
      <Phone form={form} />
    </Fieldset>
  );
}

export default BillingDetails;
