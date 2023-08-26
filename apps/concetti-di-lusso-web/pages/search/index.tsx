// Components
import { stringForQuery, useSearchInputValue } from '/src/features/Search';
import { useGetSearchProductsQuery } from '/src/features/Search/api/searchApi';
import { SearchPage } from '/src/pages/SearchPage';

export default function Page() {
  const searchValue = useSearchInputValue();
  const { data, isError, isLoading } = useGetSearchProductsQuery(
    stringForQuery(searchValue)
  );
  return <SearchPage data={data} isError={isError} isLoading={isLoading} />;
}
