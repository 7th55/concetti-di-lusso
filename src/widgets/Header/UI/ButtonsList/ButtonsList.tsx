import { Button } from '/src/shared/UI/Button';
import { Search } from '/src/features/Search';
// Styles
import './styles.css';
import { buttonStylesClass } from '/src/shared/lib/buttonStyles';
import { ButtonType } from '/src/shared/types';

export const ButtonsList = () => {
  const buttons: ButtonType[] = ['search', 'favorites', 'shopping'];
  return (
    <div className="buttons-list">
      <div className="buttons-list__shopping-buttons">
        {buttons.map((button) => (
          <div key={button} className="buttons-list__shopping-button">
            {button === 'search' ? (
              <Search />
            ) : (
              <Button
                buttonStylesClassName={buttonStylesClass({
                  type: button,
                  hover: false,
                })}
              />
            )}
          </div>
        ))}
      </div>
      <div className="buttons-list__sign-in-button">
        <Button
          buttonStylesClassName={buttonStylesClass({
            type: 'signIn',
            hover: false,
          })}
        >
          Sign In
        </Button>
      </div>
    </div>
  );
};
