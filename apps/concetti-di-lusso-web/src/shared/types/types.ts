import { StaticImageData } from 'next/image';

export type ImgPropsType = {
  img: {
    src: StaticImageData;
    alt: string;
  };
};

export type ProductData = {
  id?: number | string;
  name: string;
  description?: string;
  price: number;
  oldPrice?: number;
  favoriteButton?: boolean;
  img: {
    src: StaticImageData;
    alt: string;
  };
};
