// Components
import { Button } from '/src/shared/UI/Button';
// Types
import { ProductData } from './types/types';
// Styles
import './styles.css';
import { buttonStylesClass } from '/src/shared/lib/buttonStyles';

export const ProductCard = (props: ProductData) => {
  const { img, name, price, oldPrice } = props;

  return (
    <div className="productCard">
      <div className="productCard__content-wrapper">
        <div className="productCard__image">
          <img src={img.src} alt={img.alt} />
        </div>
        <div className="productCard__product-name">
          <h4>{name}</h4>
        </div>
        <div className='productCard__prices-and-button'>
          <div className="productCard__prices">
            <span className="productCard__price">${price}</span>
            <span className="productCard__old-price">
              ${oldPrice && oldPrice}
            </span>
          </div>
          <div className='productCard__add-button'>
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
