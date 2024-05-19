export type ProductByCategory = {
  id: string;
  slug: string;
  name: string;
  new: boolean | null;
  description: string;
  image: {
    catMobile: string | null;
    catTablet: string | null;
    catDesktop: string | null;
  } | null;
};
