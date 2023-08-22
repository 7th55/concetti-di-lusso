// Components
import Image from 'next/image';
import { Button } from '/src/shared/UI/Button';
// Images
import shopNowImg from '/src/widgets/FeaturedProduct/UI/ShopNow/assets/img/shopNowImg.png';
// Styles
import './styles.css';
import { buttonStylesClass } from '/src/shared/lib/buttonStyles';

export const ShopNow = () => {
  return (
    <div className="shopNow">
      <div className="shopNow__content">
        <div className="shopNow__header">
          <h3>Organic Cotton and Bamboo</h3>
        </div>
        <div className="shopNow__text">
          <p>
            Designed to please you with the best of Turkish’s heritage
            <br />
            in fabrics.Made from bamboo and cotton fibers, these
            <br />
            towels gathers the best from two worlds to offer soft,
            <br />
            super-absorbent fabric that is also antibacterial
            <br />
            thanks to the natural properties of bamboo.
          </p>
        </div>
        <div className="shopNow__button">
          <Button
            buttonStylesClassName={buttonStylesClass({
              type: 'shopNowBlack',
              hover: false,
            })}
          >
            Shop Now
          </Button>
        </div>
      </div>
      <div className="shopNow__image">
        <Image src={shopNowImg} alt="Towels" />
      </div>
    </div>
  );
};
