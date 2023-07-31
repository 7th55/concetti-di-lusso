import './styles.css';
import { trendingProductsData } from './assets/data';
import { TrendingProductCard } from './UI/TrendingProductCard';
import { Button } from '/src/shared/UI/Button';
import { buttonStylesClass } from '/src/shared/lib/buttonStyles';

export const TrendingProduct = () => {
  return (
    <div className="trendingProduct">
      <div className="trendingProduct__content-wrapper">
        <div className="trendingProduct__header">
          <div className="trendingProduct__header-content">
            <h3>Trending Product</h3>
          </div>
        </div>
        <div className="trendingProduct__content">
          {trendingProductsData.map((product) => (
            <div className="trendingProduct__product">
              <TrendingProductCard {...product} />
            </div>
          ))}
        </div>
        <div className="trendingProduct__show-more-button">
          <Button
            buttonStylesClassName={buttonStylesClass({
              type: 'regular',
              hover: false,
            })}
          >
            Show More
          </Button>
        </div>
      </div>
    </div>
  );
};
