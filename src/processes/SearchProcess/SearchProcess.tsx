// Components
import { MainPage } from '/src/pages/MainPage';
import { SearchPage } from '/src/pages/SearchPage';
// Store
import { searchInputValue } from '/src/features/Search/store/searchSlice';

export const SearchProcess = () => {
  const inputValue = searchInputValue();
  return <div>{inputValue === '' ? <MainPage /> : <SearchPage />}</div>;
};
