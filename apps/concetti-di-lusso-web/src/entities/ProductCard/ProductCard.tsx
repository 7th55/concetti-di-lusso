// Components
import Image from 'next/image';
import { ActionIcon, Button as ButtonMantine } from '@mantine/core';
// Icons
import { Heart } from 'tabler-icons-react';

// Hooks
import { useDispatch } from 'react-redux';
// Store
import { addItemToCart } from '../../features/Cart/store/cartSlice';
import { addToFavorites } from '../../features/Favorites/store/favoritesSlice';
// Types
import { ProductData } from './types/types';
// Styles
import './styles.css';
import { MantineButton } from '/src/shared/UI/MantineButton';

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
            <MantineButton
              onClickHandler={() => dispatch(addItemToCart({ name, price }))}
              variant="addCart"
            >
              Add Cart
            </MantineButton>
            {favoriteButton && (
              <ActionIcon
                variant="filled"
                color="maroon"
                onClick={() => dispatch(addToFavorites({ name }))}
                sx={{
                  position: 'absolute',
                  top: -15,
                  right: -15,
                }}
              >
                <Heart width={50} height={50} />
              </ActionIcon>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
