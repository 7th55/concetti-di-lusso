// Components
import { Info } from '/src/widgets/Info';
import { Header } from '/src/widgets/Header';
// Global Styles
import './styles/normalize.css';
import './styles/global.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="global__wrapper">
        <header>
          <Info />
          <Header />
        </header>
        <main>{children}</main>
    </div>
  );
}
