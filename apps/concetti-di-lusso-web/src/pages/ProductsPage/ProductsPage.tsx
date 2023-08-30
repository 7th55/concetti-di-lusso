// Components
import { LinearProgress } from '@mui/material';
import { ProductCard, ProductData } from '/src/entites/ProductCard';
// Styles
import './styles.css';

export const ProductsPage = ({
  data,
  isError,
  isLoading,
}: {
  data: ProductData[];
  isError: boolean;
  isLoading: boolean;
}) => {
  return (
    <section className="productPage">
      <div className="productPage__content-wrapper">
        <div className="productPage__content">
          <div className="productPage__search-result">
            {/* Добавить компоненты ошибки и загрузки */}
            {isError ? (
              <h1>Error</h1>
            ) : isLoading ? (
              <LinearProgress sx={{ color: 'primary.main', width: '100%' }} />
            ) : (
              data.map((product) => (
                <div key={product.id} className="productPage__product">
                  <ProductCard favoriteButton {...product} />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
