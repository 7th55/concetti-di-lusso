// Components
import Image from 'next/image';
import { Button } from '/src/shared/UI/Button';
// Types
import { ProductData } from './types/types';
// Styles
import './styles.css';
import { buttonStylesClass } from '/src/shared/lib/buttonStyles';

export const ProductCard = (props: ProductData) => {
  const { img, name, description, price, oldPrice } = props;

  const descriptionStyle = {
    height: description && '2%',
  };

  return (
    <div className="productCard">
      <div className="productCard__content-wrapper">
        <div className="productCard__image">
          <Image width={300} height={190} src={img.src} alt={img.alt} />
        </div>
        <div style={descriptionStyle} className="productCard__product-name">
          <h4>{name}</h4>
        </div>
        {description && (
          <div className="productCard__description">
            <p>{description}</p>
          </div>
        )}
        <div className="productCard__prices-and-button">
          <div className="productCard__prices">
            <span className="productCard__price">${price}</span>
            {oldPrice && (
              <span className="productCard__old-price">${oldPrice}</span>
            )}
          </div>
          <div className="productCard__add-button">
            <Button
              buttonStylesClassName={buttonStylesClass({
                type: 'addCart',
                hover: false,
              })}
            >
              Add Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
