// Hooks
import { useEffect, useState } from 'react';
// Components
import { ProductCard } from '/src/entites/ProductCard';
// Types
import { ProductData } from '/src/entites/ProductCard';
// Styles
import './styles.css';
import { searchInputValue } from '/src/features/Search/store/searchSlice';

export const SearchPage = () => {
  // Вынести в Search
  const [data, setData] = useState([]);
  const searchValue = searchInputValue();
  const searchValueEmpty = searchValue === '';

  useEffect(() => {
    if (searchValueEmpty) {
      const fetchProducts = async () => {
        const f = await fetch('http://localhost:2244/products');
        const res = await f.json();
        const data = await res;
        setData(data);
      };
      fetchProducts();
    } else {
      const searchProducts = async (search: string) => {
        // Fix
        search.replace(/ /g, '%20');
        const f = await fetch(`http://localhost:2244/products?q=${search}`);
        const res = await f.json();
        const data = await res;
        setData(data);
      };
      searchProducts(searchValue);
    }
  }, [searchValue]);

  return (
    <div className="searchPage">
      <div className="searchPage__content-wrapper">
        <div className="searchPage__content">
          <div className="searchPage__search-result">
            {data.map((product: ProductData) => (
              <div className="searchPage__product">
                <ProductCard key={product.name} {...product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
