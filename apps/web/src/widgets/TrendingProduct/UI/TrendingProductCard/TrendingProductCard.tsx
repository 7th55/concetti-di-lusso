import { TrendingProductData } from '/src/widgets/TrendingProduct/types';
import './styles.css';

export const TrendingProductCard = (props: TrendingProductData) => {
  const { img, title, description } = props;
  return (
    <div className="trendingProductCard">
      <div className="trendingProductCard__image">
        <img src={img.src} alt={img.alt} />
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
