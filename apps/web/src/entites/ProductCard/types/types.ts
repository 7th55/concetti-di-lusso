export type ProductData = {
  id?: number | string;
  name: string;
  description?: string;
  price: number;
  oldPrice?: number;
  img: {
    src: string;
    alt: string;
  };
};
