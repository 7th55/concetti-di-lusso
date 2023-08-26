// Hooks
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// Store
import { searching } from '/src/features/Search/store/searchSlice';
// Components
import { ProductCard } from '/src/entites/ProductCard';
// Types
import { ProductData } from '/src/entites/ProductCard';
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
              <h1>Loading</h1>
            ) : (
              data.map((product) => (
                <div key={product.id} className="searchPage__product">
                  <ProductCard {...product} />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
