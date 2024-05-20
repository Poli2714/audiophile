type CheckoutProductQuantityProps = {
  quantity: number;
};

function CheckoutProductQuantity({ quantity }: CheckoutProductQuantityProps) {
  return <p className='place-self-center'>{`x${quantity}`}</p>;
}

export default CheckoutProductQuantity;
