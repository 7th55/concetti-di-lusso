import { StaticImageData } from 'next/image';

export type TrendingProductData = {
  img: {
    src: StaticImageData;
    alt: string;
  };
  title: string;
  description: string;
};
