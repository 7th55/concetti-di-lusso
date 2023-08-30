// Components
import Image from 'next/image';
import { Button as ButtonMUI } from '@mui/material';
import { Button } from '/src/shared/UI/Button';
// Icons
import FavoriteIcon from '@mui/icons-material/Favorite';
// Hooks
import { useDispatch } from 'react-redux';
// Store
import { addItemToCart } from '/src/features/Cart/store/store/CartSlice';
import { addToFavorites } from '/src/features/Favorites/store/FavoritesSlice';
// Types
import { ProductData } from './types/types';
// Styles
import './styles.css';

export const ProductCard = (props: ProductData) => {
  const dispatch = useDispatch();
  const { img, name, description, price, oldPrice, favoriteButton } = props;

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
            {favoriteButton && (
              <ButtonMUI
                onClick={() => dispatch(addToFavorites({ name }))}
                variant="contained"
                sx={{ position: 'absolute', top: -30, right: -20 }}
              >
                <FavoriteIcon />
              </ButtonMUI>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
