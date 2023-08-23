// Components
import Image from 'next/image';
// Data
import { TrendingProductData } from '/src/widgets/TrendingProduct/types';
// Styles
import './styles.css';

export const TrendingProductCard = (props: TrendingProductData) => {
  const { img, title, description } = props;
  return (
    <div className="trendingProductCard">
      <div className="trendingProductCard__image">
        <Image
          src={img.src}
          alt={img.alt}
          priority={true}
          fill={true}
          sizes="(max-width: 1430px) 100%"
        />
      </div>
      <div className="trendingProductCard__content">
        <div className="trendingProductCard__title">
          <h3>{title}</h3>
        </div>
        <div className="trendingProductCard__description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
