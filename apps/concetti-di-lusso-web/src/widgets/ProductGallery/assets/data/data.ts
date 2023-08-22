// Types
import { ImgPropsType } from '/src/shared/types';

// Gallery Images
import firstGalleryImg from '/src/widgets/ProductGallery/assets/img/1.png';
import secondGalleryImg from '/src/widgets/ProductGallery/assets/img/2.png';
import thirdGalleryImg from '/src/widgets/ProductGallery/assets/img/3.png';
import fourthGalleryImg from '/src/widgets/ProductGallery/assets/img/4.png';
import fifthGalleryImg from '/src/widgets/ProductGallery/assets/img/5.png';

export const productGalleryData: ImgPropsType[] = [
  {
    img: {
      src: firstGalleryImg,
      alt: 'TowelOne',
    },
  },
  {
    img: {
      src: secondGalleryImg,
      alt: 'TowelTwo',
    },
  },
  {
    img: {
      src: thirdGalleryImg,
      alt: 'TowelThree',
    },
  },
  {
    img: {
      src: fourthGalleryImg,
      alt: 'TowelFour',
    },
  },
  {
    img: {
      src: fifthGalleryImg,
      alt: 'TowelFive',
    },
  },
];
