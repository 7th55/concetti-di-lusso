// Components
import { ProductCard, productsData } from '/src/entites/ProductCard';
import { ExploreMoreProduct } from './UI/ExploreMoreProduct/ExploreMoreProduct';
// Styles
import './styles.css';

export const FeaturedProduct = () => {
  return (
    <div className="featuredProduct">
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
              <div className='featuredProduct__product'><ProductCard {...product} /></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
