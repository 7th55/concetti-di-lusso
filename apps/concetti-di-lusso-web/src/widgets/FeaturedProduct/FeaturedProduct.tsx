// Components
import { ProductCard, productsData } from '/src/entities/ProductCard';
import { ExploreMoreProduct } from './UI/ExploreMoreProduct';
import { ShopNow } from './UI/ShopNow';
// Styles
import './styles.css';
import { Button } from '/src/shared/UI/Button';

export const FeaturedProduct = () => {
  return (
    <section className="featuredProduct">
      <div className="featuredProduct__content-wrapper">
        <div className="featuredProduct__header">
          <div className="featuredProduct__header-content">
            <h3>Featured Product</h3>
          </div>
        </div>
        <div className="featuredProduct__content">
          <div className="featuredProduct__explore-more">
            <ExploreMoreProduct />
          </div>
          <div className="featuredProduct__products">
            {productsData.map((product) => (
              <div key={product.name} className="featuredProduct__product">
                <ProductCard variant="shoppingCard" {...product} />
              </div>
            ))}
          </div>
        </div>
        <div className="featuredProduct__show-more-button">
          <Button buttonStyle="regular">Show More</Button>
        </div>

        <div className="featuredProduct__shop-now">
          <ShopNow />
        </div>
      </div>
    </section>
  );
};
