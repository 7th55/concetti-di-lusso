// Components
import { Info } from '/src/widgets/Info';
import { Header } from '/src/widgets/Header';
import { Footer } from '/src/widgets/Footer';
import { SearchProcess } from '/src/processes/SearchProcess';
// Store
import { Provider } from 'react-redux';
import { store } from './store/store';
// Global Styles
import '/src/app/normalize.css';
import '/src/app/global.css';

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <div className="global__wrapper">
          <header>
            <Info />
            <Header />
          </header>
          <main>
            <SearchProcess />
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </Provider>
    </>
  );
};
