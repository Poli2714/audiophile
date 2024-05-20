type ProductSectionTitleProps = {
  title: string;
};

function ProductSectionTitle({ title }: ProductSectionTitleProps) {
  return (
    <h2 className='text-[clamp(1.5rem,_4.5vw,_2rem)] font-bold leading-none tracking-wide'>
      {title.toUpperCase()}
    </h2>
  );
}

export default ProductSectionTitle;
