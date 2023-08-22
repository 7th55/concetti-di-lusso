// Components
import Image from 'next/image';
import { Button } from '/src/shared/UI/Button';
// Styles
import './styles.css';
import { buttonStylesClass } from '/src/shared/lib/buttonStyles';
import towels from './assets/img/towels.png';

export const ShopNowBanner = () => {
  return (
    <section className="shopNowBanner">
      <div className="shopNowBanner__content-wrapper">
        <div className="shopNowBanner__image-container">
          <Image
            width={1440}
            height={750}
            priority={true}
            className="shopNowBanner__image"
            src={towels}
            alt="Some Towels"
          />
        </div>
        <div className="shopNowBanner__content">
          <div className="shopNowBanner__header">
            <h3 className="shopNowBanner__header-text">
              Beautiful Color <br /> Contrast!
            </h3>
          </div>
          <div className="shopNowBanner__text">
            <p>Over 50 Collections to Choose for !</p>
          </div>
          <div className="shopNowBanner__shop-now">
            <Button
              buttonStylesClassName={buttonStylesClass({
                type: 'shopNow',
                hover: false,
              })}
            >
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
