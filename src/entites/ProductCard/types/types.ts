export type ProductData = {
  name: string;
  description?: string;
  price: number;
  oldPrice?: number;
  img: {
    src: string;
    alt: string;
  };
};
