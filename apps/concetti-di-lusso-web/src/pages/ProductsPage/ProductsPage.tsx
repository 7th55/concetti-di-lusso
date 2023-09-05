// Components
import { ProductCard, ProductData } from '/src/entities/ProductCard';
// Styles
import './styles.css';
import { addItemToCart } from '/src/features/Cart/store/cartSlice';
import { useDispatch } from 'react-redux';
import { addToFavorites } from '/src/features/Favorites/store/favoritesSlice';

export const ProductsPage = ({
  data,
  isError,
  isLoading,
}: {
  data: ProductData[];
  isError: boolean;
  isLoading: boolean;
}) => {
  const dispatch = useDispatch();
  return (
    <section className="productPage">
      <div className="productPage__content-wrapper">
        <div className="productPage__content">
          <div className="productPage__search-result">
            {/* Добавить компоненты ошибки и загрузки */}
            {isError ? (
              <h1>Error</h1>
            ) : isLoading ? (
              <h2>Loading</h2>
            ) : (
              data.map((product) => (
                <div key={product.id} className="productPage__product">
                  <ProductCard
                    addToCartHandler={(name, price) =>
                      dispatch(addItemToCart({ name, price }))
                    }
                    addToFavoritesHandler={(name) =>
                      dispatch(addToFavorites({ name }))
                    }
                    variant="shoppingCard"
                    favoriteButton
                    {...product}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
