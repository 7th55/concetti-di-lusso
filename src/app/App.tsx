// Components
import { Info } from '/src/widgets/Info';
import { Header } from '/src/widgets/Header';
import { ShopNowBanner } from '/src/widgets/ShopNowBanner';
import { Advantages } from '/src/widgets/Advantages';
import { FeaturedProduct } from '/src/widgets/FeaturedProduct';
import { TrendingProduct } from '/src/widgets/TrendingProduct';
import { OurTestimonials } from '/src/widgets/OurTestimonials';
import { ProductGallery } from '/src/widgets/ProductGallery';
import { GetInTouch } from '/src/widgets/GetInTouch';
import { Footer } from '/src/widgets/Footer';
// Global Styles
import '/src/app/normalize.css';
import '/src/app/global.css';

export const App = () => {
  return (
    <>
      <header>
        <Info />
        <Header />
      </header>
      <main>
        <ShopNowBanner />
        <Advantages />
        <FeaturedProduct />
        <TrendingProduct />
        <OurTestimonials />
        <ProductGallery />
        <GetInTouch />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
