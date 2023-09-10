// Components
import { useGetProductsQuery } from '../../../src/pages/ProductsPage/api/productApi';
import { ProductsPage } from '/src/pages/ProductsPage';

export default function Page() {
  const { data, isError, isLoading } = useGetProductsQuery('robes');
  return <ProductsPage data={data} isError={isError} isLoading={isLoading} />;
}
