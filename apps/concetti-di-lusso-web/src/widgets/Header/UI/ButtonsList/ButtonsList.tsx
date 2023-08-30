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

export const ButtonsList = () => {
  const buttons: ButtonType[] = ['search', 'favorites', 'shopping'];
  const linkPaths = ['', '/favorites', '/cart'];

  const cart = useCart();
  const badgeState = cart.items.reduce(
    (badgeContent, i) => badgeContent + i.count,
    0
  );
  return (
    <div className="buttons-list">
      <div className="buttons-list__shopping-buttons">
        {buttons.map((button, index) => (
          <div key={button} className="buttons-list__shopping-button">
            {button === 'search' ? (
              <Search />
            ) : button === 'shopping' ? (
              <Link href={linkPaths[index]}>
                <Badge badgeContent={badgeState} color="primary">
                  <Button buttonStyle={button} />
                </Badge>
              </Link>
            ) : (
              <Link href={linkPaths[index]}>
                <Button buttonStyle={button} />
              </Link>
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
