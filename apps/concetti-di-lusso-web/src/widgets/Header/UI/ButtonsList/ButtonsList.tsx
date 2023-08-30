// Components
import Link from 'next/link';
import { Badge } from '@mui/material';
import { Button } from '/src/shared/UI/Button';
import { Search } from '/src/features/Search';
// Hooks
import { useCart } from '/src/features/Cart/store/store/CartSlice';
// Styles
import './styles.css';
// Types
import { ButtonType } from '/src/shared/types';
import { useFavorites } from '/src/features/Favorites/store/FavoritesSlice';

export const ButtonsList = () => {
  const buttons: ButtonType[] = ['search', 'favorites', 'shopping'];
  const linkPaths = ['', '/favorites', '/cart'];

  const cart = useCart();
  const favorites = useFavorites();

  const badgeCart = cart.items.reduce(
    (badgeContent, i) => badgeContent + i.count,
    0
  );
  const badgeFavorites = favorites.items.length;
  const exhaustiveCheck = (a: any): never => {
    throw Error(':c Exhaustiveness ');
  };
  return (
    <div className="buttons-list">
      <div className="buttons-list__shopping-buttons">
        {buttons.map((button, index) => (
          <div key={button} className="buttons-list__shopping-button">
            {button === 'search' ? (
              <Search />
            ) : button === 'shopping' ? (
              <Link href={linkPaths[index]}>
                <Badge badgeContent={badgeCart} color="primary">
                  <Button buttonStyle={button} />
                </Badge>
              </Link>
            ) : button === 'favorites' ? (
              <Link href={linkPaths[index]}>
                <Badge badgeContent={badgeFavorites} color="primary">
                  <Button buttonStyle={button} />
                </Badge>
              </Link>
            ) : (
              exhaustiveCheck(button)
            )}
          </div>
        ))}
      </div>
      <div className="buttons-list__sign-in-button">
        <Button buttonStyle="signIn">Sign In</Button>
      </div>
    </div>
  );
};
