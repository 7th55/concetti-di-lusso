import { trendingProductsData } from './assets/data';
// Components
import { TrendingProductCard } from './UI/TrendingProductCard';
import { Button } from '/src/shared/UI/Button';
// Styles
import './styles.css';

export const TrendingProduct = () => {
  return (
    <section className="trendingProduct">
      <div className="trendingProduct__content-wrapper">
        <div className="trendingProduct__header">
          <div className="trendingProduct__header-content">
            <h3>Trending Product</h3>
          </div>
        </div>
        <div className="trendingProduct__content">
          {trendingProductsData.map((product) => (
            <div key={product.title} className="trendingProduct__product">
              <TrendingProductCard {...product} />
            </div>
          ))}
        </div>
        <div className="trendingProduct__show-more-button">
          <Button buttonStyle="regular">Show More</Button>
        </div>
      </div>
    </section>
  );
};
