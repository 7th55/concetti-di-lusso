import { Info } from '/src/widgets/Info/index.js';
import { Header } from '/src/widgets/Header/index.js';
import { ShopNowBanner } from '/src/widgets/ShopNowBanner';
import { Advantages } from '/src/widgets/Advantages';
// Global Styles
import '/src/app/normalize.css';
import '/src/app/global.css';

export const App = () => {
  return (
    <>
      <Info />
      <Header />
      <ShopNowBanner />
      <Advantages />
    </>
  );
};
