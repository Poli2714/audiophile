export type ProductProps = {
  id: string;
  slug: string;
  name: string;
  new: boolean | null;
  price: number;
  description: string;
  features: string;
  image: {
    mobile: string | null;
    tablet: string | null;
    desktop: string | null;
  } | null;
  accessories: {
    id: string;
    item: string;
    quantity: number;
  }[];
  gallery: {
    id: string;
    desktop: string | null;
  }[];
  relatedProducts: {
    id: string;
    slug: string;
    name: string;
    mobile: string | null;
    tablet: string | null;
    desktop: string | null;
  }[];
};

export type ProductSlug = {
  slug: string;
};
