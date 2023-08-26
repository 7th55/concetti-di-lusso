// Components
import Link from 'next/link';
import { Button } from '/src/shared/UI/Button';
import { Search } from '/src/features/Search';
// Styles
import './styles.css';
// Types
import { ButtonType } from '/src/shared/types';

export const ButtonsList = () => {
  const buttons: ButtonType[] = ['search', 'favorites', 'shopping'];
  const linkPaths = ['', '', '/cart'];
  return (
    <div className="buttons-list">
      <div className="buttons-list__shopping-buttons">
        {buttons.map((button, index) => (
          <div key={button} className="buttons-list__shopping-button">
            {button === 'search' ? (
              <Search />
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
