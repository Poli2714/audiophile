import FeaturedYX1Earphones from './FeaturedYX1Earphones/FeaturedYX1Earphones';
import FeaturedZX7Speaker from './FeaturedZX7Speaker/FeaturedZX7Speaker';
import FeaturedZX9Speaker from './FeaturedZX9Speaker/FeaturedZX9Speaker';

function FeaturedProducts() {
  return (
    <div className='flex flex-col gap-y-[clamp(1.5rem,_4vw,_3rem)]'>
      <FeaturedZX9Speaker />
      <FeaturedZX7Speaker />
      <FeaturedYX1Earphones />
    </div>
  );
}

export default FeaturedProducts;
