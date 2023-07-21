import { Info } from '/src/widgets/Info/index.js';
import { Header } from '/src/widgets/Header/index.js';
import { Promotion } from '/src/shared/UI/Promotion/index.js';
// Global Styles
import '/src/app/normalize.css';
import '/src/app/global.css';

export const App = () => {
  return (
    <>
      <Info />
      <Header />
    </>
  );
};
