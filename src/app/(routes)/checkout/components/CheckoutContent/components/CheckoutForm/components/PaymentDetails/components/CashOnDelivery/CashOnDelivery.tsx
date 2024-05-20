import Image from 'next/image';

import CashOnDeliveryIcon from '/public/images/checkout/icon-cash-on-delivery.svg';

function CashOnDelivery() {
  return (
    <div className='flex flex-col gap-y-6 lg:col-span-2 lg:flex-row lg:gap-x-6 lg:gap-y-0'>
      <div className='h-12 w-12'>
        <Image
          alt='Cash on delivery icon'
          src={CashOnDeliveryIcon}
          width={48}
          height={48}
        />
      </div>
      <div>
        <p className='text-[15px] leading-6'>
          The ‘Cash on Delivery’ option enables you to pay in cash when our
          delivery courier arrives at your residence. Just make sure your
          address is correct so that your order will not be cancelled.
        </p>
      </div>
    </div>
  );
}

export default CashOnDelivery;
