// Components
import { Info } from '/src/widgets/Info';
import { Header } from '/src/widgets/Header';
import { Footer } from '/src/widgets/Footer';
import { SearchProcess } from '/src/processes/SearchProcess';
// State
import { searchOpen } from '../features/Search';
// Global Styles
import '/src/app/normalize.css';
import '/src/app/global.css';

export const App = () => {
  const searching = searchOpen() !== true;
  return (
    <>
      <div className="global__wrapper">
        <header>
          <Info />
          <Header />
        </header>
        <main>
          <SearchProcess />
        </main>
        <footer>{searching && <Footer />}</footer>
      </div>
    </>
  );
};
