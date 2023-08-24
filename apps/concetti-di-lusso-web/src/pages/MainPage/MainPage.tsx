// Components
import { ShopNowBanner } from '/src/widgets/ShopNowBanner';
import { Advantages } from '/src/widgets/Advantages';
import { FeaturedProduct } from '/src/widgets/FeaturedProduct';
import { TrendingProduct } from '/src/widgets/TrendingProduct';
import { OurTestimonials } from '/src/widgets/OurTestimonials';
import { ProductGallery } from '/src/widgets/ProductGallery';
import { GetInTouch } from '/src/widgets/GetInTouch';
import { animationRunPageAnimation } from '/src/shared/store/pageAnimationSlice';
import { useDispatch } from 'react-redux';

export const MainPage = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div
        className="pageAnimation"
        onAnimationStart={(e) => {
          e.animationName === 'pageOpacity' &&
            dispatch(animationRunPageAnimation(true));
        }}
        onAnimationEnd={(e) => {
          e.animationName === 'pageOpacity' &&
            dispatch(animationRunPageAnimation(false));
        }}
      >
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
