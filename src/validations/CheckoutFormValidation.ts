import { z } from 'zod';

export const checkoutFormSchema = z
  .object({
    name: z
      .string({ required_error: 'Name is required' })
      .trim()
      .min(2, { message: 'Your name must be at least two characters' })
      .regex(/^[a-z0-9]{2,}$/i, {
        message: 'Not a valid name',
      }),
    email: z
      .string({ required_error: 'Email is required' })
      .email({ message: 'Not a valid email address' }),
    phone: z
      .string({
        required_error: 'Phone number is required',
      })
      .regex(/^(\+1[\s.-]?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, {
        message: 'Not a valid phone number',
      }),
    address: z
      .string({
        required_error: 'Address is required',
      })
      .min(5, { message: 'Not a valid address' }),
    zip: z
      .string({ required_error: 'ZIP code is required' })
      .regex(/^[0-9]{5}$/, { message: 'Not a valid ZIP code' }),
    city: z.string().trim().min(1, { message: 'City is required' }),
    country: z.enum(['Canada', 'United States'], {
      required_error: 'Country is required',
    }),
    payment: z.enum(['eMoney', 'cash'], {
      required_error: 'Payment method is required',
    }),
    eMoneyNum: z.string().optional(),
    eMoneyPin: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.payment === 'eMoney') {
        return !data.eMoneyNum ? false : /^[0-9]{8,15}$/.test(data.eMoneyNum);
      }
      return true;
    },
    {
      message: 'Please enter an eMoney number with 8 to 15 digits',
      path: ['eMoneyNum'],
    }
  )
  .refine(
    (data) => {
      if (data.payment === 'eMoney') {
        return !data.eMoneyPin ? false : /^[0-9]{4}$/.test(data.eMoneyPin);
      }
      return true;
    },
    {
      message: 'Please enter a 4-digit eMoney PIN',
      path: ['eMoneyPin'],
    }
  );

export type CheckoutFormSchemaProps = z.infer<typeof checkoutFormSchema>;
