// Components
import { Info } from '/src/widgets/Info';
import { Header } from '/src/widgets/Header';
import { Footer } from '/src/widgets/Footer';
// State
import { searchOpen } from '/src/features/Search';
// Global Styles
import './styles/normalize.css';
import './styles/global.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  const searching = searchOpen();
  return (
    <div className="global__wrapper">
      <header>
        <Info />
        <Header />
      </header>
      <main>{children}</main>
      {searching !== true && (
        <footer>
          <Footer />
        </footer>
      )}
    </div>
  );
}