// Components
import { ShopNowBanner } from '/src/widgets/ShopNowBanner';
import { Advantages } from '/src/widgets/Advantages';
import { FeaturedProduct } from '/src/widgets/FeaturedProduct';
import { TrendingProduct } from '/src/widgets/TrendingProduct';
import { OurTestimonials } from '/src/widgets/OurTestimonials';
import { ProductGallery } from '/src/widgets/ProductGallery';
import { GetInTouch } from '/src/widgets/GetInTouch';

export const MainPage = () => {
  return (
    <>
    <div className='pageAnimation'>
      <ShopNowBanner />
      <Advantages />
      <FeaturedProduct />
      <TrendingProduct />
      <OurTestimonials />
      <ProductGallery />
      <GetInTouch />
      </div>
    </>
  );
};
