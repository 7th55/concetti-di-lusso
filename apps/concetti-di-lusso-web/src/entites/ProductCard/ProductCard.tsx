// Components
import Image from 'next/image';
import { Button } from '/src/shared/UI/Button';
// Hooks
import { useDispatch } from 'react-redux';
// Types
import { ProductData } from './types/types';
// Styles
import './styles.css';
import { addItemToCart } from '/src/features/Cart/store/store/CartSlice';

export const ProductCard = (props: ProductData) => {
  const dispatch = useDispatch();
  const { img, name, description, price, oldPrice } = props;

  return (
    <div className="productCard">
      <div className="productCard__content-wrapper">
        <div className="productCard__image">
          <Image
            fill={true}
            src={img.src}
            alt={img.alt}
            sizes="(max-width: 1430px) 100%"
            priority={true}
          />
        </div>
        <div
          className={`productCard__product-name ${
            description && 'productCard__product-with-description-name'
          }`}
        >
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
              onClickHandler={() => dispatch(addItemToCart({ name, price }))}
              buttonStyle="addCart"
            >
              Add Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
