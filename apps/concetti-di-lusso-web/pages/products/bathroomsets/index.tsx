// Components
import { useGetProductsQuery } from '/src/shared/api/concettiDiLussoApi';
import { ProductsPage } from '/src/pages/ProductsPage';

export default function Page() {
  const { data, isError, isLoading, isSuccess } =
    useGetProductsQuery('bathroomsets');

  return (
    isSuccess && (
      <ProductsPage data={data} isError={isError} isLoading={isLoading} />
    )
  );
}
