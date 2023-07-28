import { Info } from '/src/widgets/Info';
import { Header } from '/src/widgets/Header';
import { ShopNowBanner } from '/src/widgets/ShopNowBanner';
import { Advantages } from '/src/widgets/Advantages';
import { FeaturedProduct } from '/src/widgets/FeaturedProduct';
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
      <FeaturedProduct />
    </>
  );
};
