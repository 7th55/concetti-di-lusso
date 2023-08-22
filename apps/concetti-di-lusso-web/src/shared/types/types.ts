import { StaticImageData } from 'next/image';

export type ImgPropsType = {
  img: {
    src: StaticImageData;
    alt: string;
  };
};
