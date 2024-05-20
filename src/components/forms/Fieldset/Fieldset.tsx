type FieldsetProps = {
  children: React.ReactNode;
  legend: string;
};

function Fieldset({ children, legend }: FieldsetProps) {
  return (
    <fieldset className='grid space-y-6 lg:grid-cols-2 lg:gap-x-4'>
      <legend className='text-[13px] font-bold tracking-widest text-primary'>
        {legend.toUpperCase()}
      </legend>
      {children}
    </fieldset>
  );
}

export default Fieldset;
