// Components
import { MainPage } from '/src/pages/MainPage';
import { SearchPage } from '/src/pages/SearchPage';
// Store
import { searchOpen } from '/src/features/Search';

export const SearchProcess = () => {
  const searching = searchOpen() !== true;
  return <div>{searching ? <MainPage /> : <SearchPage />}</div>;
};
