// Components
import { ProductCard, productsData } from '/src/entites/ProductCard';
import { ExploreMoreProduct } from './UI/ExploreMoreProduct/ExploreMoreProduct';
// Styles
import './styles.css';
import { Button } from '/src/shared/UI/Button';
import { buttonStylesClass } from '/src/shared/lib/buttonStyles';

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
              <div className="featuredProduct__product">
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
        <div className="featuredProduct__show-more-button">
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
    </section>
  );
};
