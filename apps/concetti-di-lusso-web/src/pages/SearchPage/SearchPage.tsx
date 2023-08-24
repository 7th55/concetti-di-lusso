// Hooks
import { useGetSearchProductsQuery } from '/src/features/Search/api/searchApi';
// Store
import { useSearchInputValue } from '/src/features/Search/store/searchSlice';
// Lib
import { stringForQuery } from '/src/features/Search';
// Components
import { ProductCard } from '/src/entites/ProductCard';
// Types
import { ProductData } from '/src/entites/ProductCard';
// Styles
import './styles.css';
import { useDispatch } from 'react-redux';
import { animationRunPageAnimation } from '/src/shared/store/pageAnimationSlice';

export const SearchPage = () => {
  const dispatch = useDispatch();
  const searchValue = useSearchInputValue();
  const { data, isError, isLoading } = useGetSearchProductsQuery(
    stringForQuery(searchValue)
  );

  return (
    <section
      className="searchPage pageAnimation"
      onAnimationStart={(e) => {
        e.animationName === 'pageOpacity' &&
          dispatch(animationRunPageAnimation(true));
      }}
      onAnimationEnd={(e) => {
        e.animationName === 'pageOpacity' &&
          dispatch(animationRunPageAnimation(false));
      }}
    >
      <div className="searchPage__content-wrapper">
        <div className="searchPage__content">
          <div className="searchPage__search-result">
            {/* Добавить компоненты ошибки и загрузки */}
            {isError ? (
              <h1>Error</h1>
            ) : isLoading ? (
              <h1>Loading</h1>
            ) : (
              data.map((product: ProductData) => (
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
