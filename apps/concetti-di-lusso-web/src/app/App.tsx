// Components
import { Info } from '/src/widgets/Info';
import { Header } from '/src/widgets/Header';
import { Footer } from '/src/widgets/Footer';
// State
import { searchOpen } from '../features/Search';
// Global Styles
import '/src/app/normalize.css';
import '/src/app/global.css';
import { SearchPage } from '/src/pages/SearchPage';
import { MainPage } from '/src/pages/MainPage';

export const App = () => {
  const searching = searchOpen();
  return (
    <>
      <div className="global__wrapper">
        <header>
          <Info />
          <Header />
        </header>
        <main>{searching ? <SearchPage /> : <MainPage />}</main>
        {searching !== true && (
          <footer>
            <Footer />
          </footer>
        )}
      </div>
    </>
  );
};
