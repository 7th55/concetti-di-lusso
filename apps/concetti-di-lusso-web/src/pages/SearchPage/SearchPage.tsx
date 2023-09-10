// Hooks
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// Store
import { searching } from '/src/features/Search/store/searchSlice';
import { addItemToCart } from '/src/features/Cart/store/cartSlice';
import { addToFavorites } from '/src/features/Favorites/store/favoritesSlice';
// Components
import { ProductCard } from '/src/entities/ProductCard';
// Types
import { ProductData } from '/src/entities/ProductCard';
// Styles
import './styles.css';

export const SearchPage = ({
  data,
  isError,
  isLoading,
}: {
  data: ProductData[];
  isError: boolean;
  isLoading: boolean;
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searching(true));
    return () => {
      dispatch(searching(false));
    };
  }, []);

  return (
    <section className="searchPage">
      <div className="searchPage__content-wrapper">
        <div className="searchPage__content">
          <div className="searchPage__search-result">
            {/* Добавить компоненты ошибки и загрузки */}
            {isError ? (
              <h1>Error</h1>
            ) : isLoading ? (
              <h2>Loading</h2>
            ) : (
              data.map((product) => (
                <div key={product.id} className="searchPage__product">
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

            <div className="searchPage__product"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
